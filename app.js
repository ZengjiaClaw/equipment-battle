/* 中级消防员刷题小程序 - 应用逻辑 */

// 状态管理
const state = {
    currentPage: 'home',
    currentCategory: null,
    currentQuestionIndex: 0,
    currentQuestions: [],
    userAnswers: {},
    examMode: false,
    examSettings: {
        questionCount: 50,
        timeLimit: 60
    },
    practiceMode: 'single' // single | multi
};

// 本地存储键名
const STORAGE_KEYS = {
    wrongQuestions: 'firefighter_wrong_questions',
    practiceProgress: 'firefighter_practice_progress',
    examHistory: 'firefighter_exam_history',
    settings: 'firefighter_settings'
};

// 工具函数
const utils = {
    // 显示Toast提示
    showToast(message, duration = 2000) {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), duration);
    },

    // 保存数据到本地存储
    saveData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('存储失败:', e);
        }
    },

    // 从本地存储读取数据
    loadData(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error('读取失败:', e);
            return defaultValue;
        }
    },

    // 获取错题本
    getWrongQuestions() {
        return this.loadData(STORAGE_KEYS.wrongQuestions, []);
    },

    // 添加错题
    addWrongQuestion(question) {
        const wrongQuestions = this.getWrongQuestions();
        const exists = wrongQuestions.find(q => q.id === question.id);
        if (!exists) {
            wrongQuestions.push({
                ...question,
                wrongTime: new Date().toISOString()
            });
            this.saveData(STORAGE_KEYS.wrongQuestions, wrongQuestions);
        }
    },

    // 移除错题（答对后）
    removeWrongQuestion(questionId) {
        const wrongQuestions = this.getWrongQuestions();
        const filtered = wrongQuestions.filter(q => q.id !== questionId);
        this.saveData(STORAGE_KEYS.wrongQuestions, filtered);
    },

    // 获取练习进度
    getPracticeProgress() {
        return this.loadData(STORAGE_KEYS.practiceProgress, {});
    },

    // 更新练习进度
    updatePracticeProgress(categoryId, questionId, isCorrect) {
        const progress = this.getPracticeProgress();
        if (!progress[categoryId]) {
            progress[categoryId] = { total: 0, correct: 0, questions: {} };
        }
        if (!progress[categoryId].questions[questionId]) {
            progress[categoryId].questions[questionId] = { correct: 0, wrong: 0 };
            progress[categoryId].total++;
        }
        if (isCorrect) {
            progress[categoryId].questions[questionId].correct++;
            progress[categoryId].correct++;
        } else {
            progress[categoryId].questions[questionId].wrong++;
        }
        this.saveData(STORAGE_KEYS.practiceProgress, progress);
    },

    // 获取考试历史
    getExamHistory() {
        return this.loadData(STORAGE_KEYS.examHistory, []);
    },

    // 添加考试记录
    addExamHistory(result) {
        const history = this.getExamHistory();
        history.unshift({
            ...result,
            date: new Date().toISOString()
        });
        // 只保留最近20条记录
        this.saveData(STORAGE_KEYS.examHistory, history.slice(0, 20));
    },

    // 格式化时间
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },

    // 获取难度等级文本
    getDifficultyText(level) {
        const map = { 1: '简单', 2: '中等', 3: '困难' };
        return map[level] || '简单';
    },

    // 打乱数组
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};

// 页面渲染函数
const render = {
    // 首页
    home() {
        const stats = this.getStats();
        return `
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="number">${stats.total}</div>
                    <div class="label">题库总数</div>
                </div>
                <div class="stat-card warning">
                    <div class="number">${stats.wrongCount}</div>
                    <div class="label">错题本</div>
                </div>
                <div class="stat-card success">
                    <div class="number">${stats.practiceCount}</div>
                    <div class="label">已练习</div>
                </div>
                <div class="stat-card danger">
                    <div class="number">${stats.examCount}</div>
                    <div class="label">考试次数</div>
                </div>
            </div>
            
            <div class="quick-actions">
                <button class="action-btn" onclick="app.navigateTo('category')">
                    <span class="icon">📚</span>
                    <span class="text">分类刷题</span>
                    <span class="sub\">按章节练习</span>
                </button>
                <button class="action-btn" onclick="app.navigateTo('exam')">
                    <span class="icon">📝</span>
                    <span class="text">模拟考试</span>
                    <span class="sub\">限时实战</span>
                </button>
                <button class="action-btn" onclick="app.navigateTo('wrong')">
                    <span class="icon">📕</span>
                    <span class="text">错题本</span>
                    <span class="sub">查漏补缺</span>
                </button>
                <button class="action-btn" onclick="app.navigateTo('progress')">
                    <span class="icon">📊</span>
                    <span class="text">进度追踪</span>
                    <span class="sub">数据统计</span>
                </button>
            </div>
            
            <div class="section-title">题目分类</div>
            <div class="category-list">
                ${questionBank.categories.map(cat => {
                    const catStats = stats.byCategory[cat.id] || { done: 0, total: 0 };
                    return `
                        <div class="category-item" onclick="app.startCategoryPractice(${cat.id})">
                            <span class="icon">${cat.icon}</span>
                            <div class="info">
                                <div class="name">${cat.name}</div>
                                <div class="count">已练习 ${catStats.done}/${catStats.total} 题</div>
                            </div>
                            <span class="arrow">›</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    // 获取统计数据
    getStats() {
        const wrongQuestions = utils.getWrongQuestions();
        const progress = utils.getPracticeProgress();
        const history = utils.getExamHistory();
        
        let practiceCount = 0;
        const byCategory = {};
        
        questionBank.categories.forEach(cat => {
            const catQuestions = questionBank.questions.filter(q => q.categoryId === cat.id);
            byCategory[cat.id] = { done: 0, total: catQuestions.length };
            
            if (progress[cat.id]) {
                const doneCount = Object.keys(progress[cat.id].questions).length;
                byCategory[cat.id].done = doneCount;
                practiceCount += doneCount;
            }
        });
        
        return {
            total: questionBank.questions.length,
            wrongCount: wrongQuestions.length,
            practiceCount: practiceCount,
            examCount: history.length,
            byCategory: byCategory
        };
    },

    // 分类列表页
    category() {
        return `
            <div class="back-btn" onclick="app.navigateTo('home')">‹ 返回首页</div>
            <div class="section-title">选择分类</div>
            <div class="category-list">
                ${questionBank.categories.map(cat => {
                    const catQuestions = questionBank.questions.filter(q => q.categoryId === cat.id);
                    return `
                        <div class="category-item" onclick="app.startCategoryPractice(${cat.id})">
                            <span class="icon">${cat.icon}</span>
                            <div class="info">
                                <div class="name">${cat.name}</div>
                                <div class="count">${catQuestions.length} 道题目</div>
                            </div>
                            <span class="arrow">›</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    // 做题页面
    practice() {
        const question = state.currentQuestions[state.currentQuestionIndex];
        if (!question) return '';
        
        const userAnswer = state.userAnswers[question.id];
        const isMulti = question.type === 'multi';
        const answered = userAnswer !== undefined;
        
        let difficultyClass = '';
        if (question.difficulty === 2) difficultyClass = 'medium';
        if (question.difficulty === 3) difficultyClass = 'hard';
        
        return `
            <div class="back-btn" onclick="app.confirmExit()">‹ 返回</div>
            
            <div class="question-header">
                <span class="question-counter">
                    ${state.currentQuestionIndex + 1} / ${state.currentQuestions.length}
                </span>
                <span class="question-difficulty ${difficultyClass}">
                    ${utils.getDifficultyText(question.difficulty)}
                </span>
            </div>
            
            <div class="question-type">
                ${isMulti ? '【多选题】请选择所有正确答案' : '【单选题】请选择正确答案'}
            </div>
            
            <div class="question-content">${question.question}</div>
            
            <div class="option-list">
                ${question.options.map((option, index) => {
                    const letter = String.fromCharCode(65 + index);
                    let optionClass = 'option-item';
                    let prefixClass = 'option-prefix';
                    
                    if (answered) {
                        const isCorrect = (isMulti ? question.answer.includes(index) : question.answer === index);
                        const isSelected = isMulti ? (userAnswer || []).includes(index) : userAnswer === index;
                        
                        if (isCorrect) {
                            optionClass += ' correct';
                        } else if (isSelected && !isCorrect) {
                            optionClass += ' wrong';
                        }
                        if (isSelected) {
                            prefixClass += ' selected';
                        }
                    } else if (userAnswer !== undefined) {
                        if (isMulti ? (userAnswer || []).includes(index) : userAnswer === index) {
                            optionClass += ' selected';
                        }
                    }
                    
                    return `
                        <div class="${optionClass}" onclick="app.selectOption(${index})">
                            <span class="${prefixClass}">${letter}</span>
                            <span class="option-text">${option}</span>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="answer-section ${answered ? 'show' : ''}" id="answerSection">
                ${answered ? this.renderAnswerSection(question, userAnswer) : ''}
            </div>
            
            <div class="bottom-actions">
                ${state.currentQuestionIndex > 0 ? `
                    <button class="btn btn-secondary" onclick="app.prevQuestion()">上一题</button>
                ` : '<div></div>'}
                
                ${answered ? `
                    ${state.currentQuestionIndex < state.currentQuestions.length - 1 ? `
                        <button class="btn btn-primary" onclick="app.nextQuestion()">下一题</button>
                    ` : `
                        <button class="btn btn-success" onclick="app.finishPractice()">
                            ${state.examMode ? '交卷' : '完成练习'}
                        </button>
                    `}
                ` : `
                    <button class="btn btn-primary" onclick="app.submitAnswer()" ${userAnswer === undefined && !isMulti ? 'disabled' : ''}>
                        确认答案
                    </button>
                `}
            </div>
        `;
    },

    // 渲染答案解析区
    renderAnswerSection(question, userAnswer) {
        const isMulti = question.type === 'multi';
        const isCorrect = isMulti 
            ? (userAnswer && question.answer.length === userAnswer.length && 
               question.answer.every(a => userAnswer.includes(a)))
            : userAnswer === question.answer;
        
        const resultClass = isCorrect ? 'right' : 'wrong';
        const resultText = isCorrect ? '回答正确！' : '回答错误';
        const icon = isCorrect ? '✓' : '✗';
        
        let correctAnswerText;
        if (isMulti) {
            const answers = question.answer.map(a => String.fromCharCode(65 + a)).join('、');
            correctAnswerText = answers;
        } else {
            correctAnswerText = String.fromCharCode(65 + question.answer);
        }
        
        return `
            <div class="answer-result ${resultClass}">
                <span class="icon">${icon}</span>
                <span>${resultText}</span>
                <span style="margin-left: auto;">正确答案：${correctAnswerText}</span>
            </div>
            <div class="explanation">
                <div class="explanation-title">答案解析</div>
                ${question.explanation}
            </div>
        `;
    },

    // 模拟考试页
    exam() {
        const history = utils.getExamHistory().slice(0, 5);
        return `
            <div class="back-btn" onclick="app.navigateTo('home')">‹ 返回首页</div>
            
            <div class="exam-info">
                <h3>模拟考试</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="value">${questionBank.questions.length}</div>
                        <div class="label">题目总数</div>
                    </div>
                    <div class="info-item">
                        <div class="value">${state.examSettings.questionCount}</div>
                        <div class="label">本次题数</div>
                    </div>
                    <div class="info-item">
                        <div class="value">${state.examSettings.timeLimit}</div>
                        <div class="label">限时(分钟)</div>
                    </div>
                </div>
            </div>
            
            <div class="exam-settings">
                <h4>考试设置</h4>
                <div class="setting-item">
                    <label>题目数量</label>
                    <select id="examQuestionCount" onchange="app.updateExamSetting('questionCount', this.value)">
                        <option value="20">20题</option>
                        <option value="50" selected>50题</option>
                        <option value="100">100题</option>
                    </select>
                </div>
                <div class="setting-item">
                    <label>时间限制</label>
                    <select id="examTimeLimit" onchange="app.updateExamSetting('timeLimit', this.value)">
                        <option value="30">30分钟</option>
                        <option value="60" selected>60分钟</option>
                        <option value="90">90分钟</option>
                    </select>
                </div>
            </div>
            
            <button class="exam-start-btn" onclick="app.startExam()">
                开始考试
            </button>
            
            ${history.length > 0 ? `
                <div class="section-title" style="margin-top: 25px;">最近考试</div>
                <div class="history-list">
                    ${history.map(item => `
                        <div class="history-item">
                            <div>
                                <div class="date">${new Date(item.date).toLocaleDateString()}</div>
                            </div>
                            <div class="score ${item.pass ? 'pass' : 'fail'}">
                                ${item.score}分 ${item.pass ? '合格' : '不合格'}
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        `;
    },

    // 错题本页
    wrong() {
        const wrongQuestions = utils.getWrongQuestions();
        
        if (wrongQuestions.length === 0) {
            return `
                <div class="back-btn" onclick="app.navigateTo('home')">‹ 返回首页</div>
                <div class="wrong-empty">
                    <div class="icon">📕</div>
                    <h3>错题本为空</h3>
                    <p>太棒了！暂无错题记录<br/>继续保持，再接再厉！</p>
                </div>
            `;
        }
        
        return `
            <div class="back-btn" onclick="app.navigateTo('home')">‹ 返回首页</div>
            <div class="section-title">错题本 (${wrongQuestions.length}道)</div>
            <div class="wrong-list">
                ${wrongQuestions.map(q => {
                    const cat = questionBank.categories.find(c => c.id === q.categoryId);
                    return `
                        <div class="wrong-item" onclick="app.reviewWrongQuestion(${q.id})">
                            <div class="question-preview">${q.question}</div>
                            <div class="meta">
                                <span>${cat ? cat.name : '未知分类'}</span>
                                <span>${new Date(q.wrongTime).toLocaleDateString()}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    // 进度追踪页
    progress() {
        const stats = this.getStats();
        const wrongQuestions = utils.getWrongQuestions();
        const history = utils.getExamHistory();
        
        // 计算正确率
        let totalCorrect = 0;
        let totalAnswered = 0;
        Object.values(stats.byCategory).forEach(cat => {
            totalAnswered += cat.done;
        });
        
        const progress = utils.getPracticeProgress();
        Object.values(progress).forEach(cat => {
            totalCorrect += cat.correct || 0;
        });
        
        const accuracyRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
        const passRate = history.length > 0 
            ? Math.round((history.filter(h => h.pass).length / history.length) * 100) 
            : 0;
        
        return `
            <div class="back-btn" onclick="app.navigateTo('home')">‹ 返回首页</div>
            <div class="section-title">练习进度</div>
            
            <div class="chart-container">
                <div class="chart-item">
                    <div class="percentage">${stats.total}</div>
                    <div class="chart-label">题库总数</div>
                </div>
                <div class="chart-item">
                    <div class="percentage">${accuracyRate}%</div>
                    <div class="chart-label">正确率</div>
                </div>
                <div class="chart-item">
                    <div class="percentage">${stats.practiceCount}</div>
                    <div class="chart-label">已练习</div>
                </div>
                <div class="chart-item">
                    <div class="percentage">${passRate}%</div>
                    <div class="chart-label">考试合格率</div>
                </div>
            </div>
            
            <div class="section-title" style="margin-top: 20px;">分类进度</div>
            ${questionBank.categories.map(cat => {
                const catStat = stats.byCategory[cat.id] || { done: 0, total: 0 };
                const percent = catStat.total > 0 ? Math.round((catStat.done / catStat.total) * 100) : 0;
                return `
                    <div class="category-progress">
                        <div class="cat-name">
                            <span>${cat.icon} ${cat.name}</span>
                            <span>${catStat.done}/${catStat.total}</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percent}%"></div>
                        </div>
                    </div>
                `;
            }).join('')}
            
            ${wrongQuestions.length > 0 ? `
                <div class="section-title" style="margin-top: 20px;">错题统计</div>
                <div class="progress-card">
                    <p style="color: #666; font-size: 14px;">
                        当前共有 <strong style="color: #e74c3c;">${wrongQuestions.length}</strong> 道错题，
                        建议每天复习错题本，巩固薄弱知识点。
                    </p>
                </div>
            ` : ''}
        `;
    },

    // 考试结果页
    examResult() {
        const result = state.examResult;
        const grade = result.score >= 90 ? '优秀' : result.score >= 75 ? '良好' : result.score >= 60 ? '及格' : '不及格';
        const gradeColor = result.score >= 60 ? 'var(--success-color)' : 'var(--danger-color)';
        
        return `
            <div class="result-header" style="background: linear-gradient(135deg, ${result.pass ? '#27ae60, #1e8449' : '#e74c3c, #c0392b'});">
                <div class="score">${result.score}</div>
                <div class="total">总分 100 分</div>
                <div class="grade">${grade}</div>
            </div>
            
            <div class="result-detail">
                <div class="result-item">
                    <span class="label">正确题数</span>
                    <span class="value right">${result.correct} 题</span>
                </div>
                <div class="result-item">
                    <span class="label">错误题数</span>
                    <span class="value wrong">${result.wrong} 题</span>
                </div>
                <div class="result-item">
                    <span class="label">正确率</span>
                    <span class="value">${result.accuracy}%</span>
                </div>
                <div class="result-item">
                    <span class="label">用时</span>
                    <span class="value">${utils.formatTime(result.timeUsed)}</span>
                </div>
            </div>
            
            <div class="bottom-actions">
                <button class="btn btn-secondary" onclick="app.navigateTo('home')">返回首页</button>
                <button class="btn btn-primary" onclick="app.viewExamReview()">查看错题</button>
            </div>
        `;
    },

    // 答题卡页
    answerSheet() {
        return `
            <div class="back-btn" onclick="app.resumeExam()">‹ 返回继续答题</div>
            <div class="section-title">答题卡</div>
            
            <div class="answer-sheet">
                ${state.currentQuestions.map((q, index) => {
                    const answered = state.userAnswers[q.id] !== undefined;
                    const isCurrent = index === state.currentQuestionIndex;
                    let className = 'answer-dot';
                    if (answered) {
                        const isMulti = q.type === 'multi';
                        const userAnswer = state.userAnswers[q.id];
                        const isCorrect = isMulti 
                            ? (userAnswer && q.answer.length === userAnswer.length && 
                               q.answer.every(a => userAnswer.includes(a)))
                            : userAnswer === q.answer;
                        className += isCorrect ? ' answered' : ' wrong-answer';
                    }
                    if (isCurrent) className += ' current';
                    
                    return `
                        <div class="${className}" onclick="app.goToQuestion(${index})">
                            ${index + 1}
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="bottom-actions" style="margin-top: 25px;">
                <button class="btn btn-success" onclick="app.submitExam()">交卷</button>
            </div>
        `;
    }
};

// 应用主类
const app = {
    // 导航到指定页面
    navigateTo(page) {
        state.currentPage = page;
        this.render();
        
        // 滚动到顶部
        window.scrollTo(0, 0);
    },

    // 渲染当前页面
    render() {
        const content = document.getElementById('content');
        let html = '';
        
        switch (state.currentPage) {
            case 'home':
                html = render.home();
                break;
            case 'category':
                html = render.category();
                break;
            case 'practice':
                html = render.practice();
                break;
            case 'exam':
                html = render.exam();
                break;
            case 'wrong':
                html = render.wrong();
                break;
            case 'progress':
                html = render.progress();
                break;
            case 'examResult':
                html = render.examResult();
                break;
            case 'answerSheet':
                html = render.answerSheet();
                break;
        }
        
        content.innerHTML = `<div class="page active">${html}</div>`;
    },

    // 开始分类练习
    startCategoryPractice(categoryId) {
        state.currentCategory = categoryId;
        state.examMode = false;
        
        const questions = questionBank.questions.filter(q => q.categoryId === categoryId);
        state.currentQuestions = utils.shuffleArray(questions);
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        
        this.navigateTo('practice');
    },

    // 选择选项
    selectOption(optionIndex) {
        const question = state.currentQuestions[state.currentQuestionIndex];
        if (state.userAnswers[question.id] !== undefined) return;
        
        if (question.type === 'multi') {
            if (!state.userAnswers[question.id]) {
                state.userAnswers[question.id] = [];
            }
            const idx = state.userAnswers[question.id].indexOf(optionIndex);
            if (idx > -1) {
                state.userAnswers[question.id].splice(idx, 1);
            } else {
                state.userAnswers[question.id].push(optionIndex);
            }
            // 更新UI显示选中状态
            this.render();
        } else {
            state.userAnswers[question.id] = optionIndex;
            this.render();
        }
    },

    // 提交答案
    submitAnswer() {
        const question = state.currentQuestions[state.currentQuestionIndex];
        
        if (question.type === 'single' && state.userAnswers[question.id] === undefined) {
            utils.showToast('请选择答案');
            return;
        }
        
        if (question.type === 'multi') {
            if (!state.userAnswers[question.id] || state.userAnswers[question.id].length === 0) {
                utils.showToast('请选择至少一个答案');
                return;
            }
        }
        
        // 检查是否正确
        const isMulti = question.type === 'multi';
        const userAnswer = state.userAnswers[question.id];
        const isCorrect = isMulti 
            ? (userAnswer && question.answer.length === userAnswer.length && 
               question.answer.every(a => userAnswer.includes(a)))
            : userAnswer === question.answer;
        
        // 更新进度
        if (state.currentCategory) {
            utils.updatePracticeProgress(state.currentCategory, question.id, isCorrect);
        }
        
        // 记录错题
        if (!isCorrect) {
            utils.addWrongQuestion(question);
        } else if (state.currentCategory) {
            // 答对了，从错题本移除（如果有的话）
            utils.removeWrongQuestion(question.id);
        }
        
        // 更新UI
        document.getElementById('answerSection').classList.add('show');
        this.render();
    },

    // 上一题
    prevQuestion() {
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            this.render();
        }
    },

    // 下一题
    nextQuestion() {
        if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
            state.currentQuestionIndex++;
            this.render();
        }
    },

    // 完成练习
    finishPractice() {
        if (state.examMode) {
            this.showAnswerSheet();
        } else {
            this.navigateTo('home');
            utils.showToast('练习完成！');
        }
    },

    // 确认退出
    confirmExit() {
        const modal = document.getElementById('modal');
        modal.classList.add('show');
    },

    // 关闭弹窗
    closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('show');
    },

    // 更新考试设置
    updateExamSetting(key, value) {
        state.examSettings[key] = parseInt(value);
    },

    // 开始考试
    startExam() {
        state.examMode = true;
        state.currentCategory = null;
        state.examStartTime = Date.now();
        state.examTimeLeft = state.examSettings.timeLimit * 60;
        
        // 随机抽取题目
        const shuffled = utils.shuffleArray(questionBank.questions);
        state.currentQuestions = shuffled.slice(0, state.examSettings.questionCount);
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        
        // 启动计时器
        this.startExamTimer();
        
        this.navigateTo('practice');
    },

    // 考试计时器
    startExamTimer() {
        if (state.examTimer) clearInterval(state.examTimer);
        
        state.examTimer = setInterval(() => {
            state.examTimeLeft--;
            
            if (state.examTimeLeft <= 0) {
                clearInterval(state.examTimer);
                this.submitExam();
            }
            
            // 更新计时器显示
            const timerEl = document.querySelector('.exam-timer');
            if (timerEl) {
                timerEl.textContent = utils.formatTime(state.examTimeLeft);
            }
        }, 1000);
    },

    // 显示答题卡
    showAnswerSheet() {
        if (state.examTimer) clearInterval(state.examTimer);
        state.currentPage = 'answerSheet';
        this.render();
    },

    // 恢复考试
    resumeExam() {
        this.startExamTimer();
        state.currentPage = 'practice';
        this.render();
    },

    // 跳转到指定题目
    goToQuestion(index) {
        state.currentQuestionIndex = index;
        this.resumeExam();
    },

    // 交卷
    submitExam() {
        if (state.examTimer) clearInterval(state.examTimer);
        
        // 计算成绩
        let correct = 0;
        let wrong = 0;
        
        state.currentQuestions.forEach(q => {
            const userAnswer = state.userAnswers[q.id];
            if (userAnswer === undefined) {
                wrong++;
                return;
            }
            
            const isMulti = q.type === 'multi';
            const isCorrect = isMulti 
                ? (userAnswer && q.answer.length === userAnswer.length && 
                   q.answer.every(a => userAnswer.includes(a)))
                : userAnswer === q.answer;
            
            if (isCorrect) {
                correct++;
            } else {
                wrong++;
                utils.addWrongQuestion(q);
            }
        });
        
        const total = state.currentQuestions.length;
        const score = Math.round((correct / total) * 100);
        const timeUsed = state.examSettings.timeLimit * 60 - state.examTimeLeft;
        const accuracy = Math.round((correct / total) * 100);
        
        state.examResult = {
            score,
            correct,
            wrong,
            accuracy,
            timeUsed,
            pass: score >= 60
        };
        
        // 保存考试记录
        utils.addExamHistory(state.examResult);
        
        // 跳转到结果页
        this.navigateTo('examResult');
    },

    // 查看考试错题
    viewExamReview() {
        // 找到所有错题
        const wrongIds = [];
        state.currentQuestions.forEach(q => {
            const userAnswer = state.userAnswers[q.id];
            if (userAnswer === undefined) return;
            
            const isMulti = q.type === 'multi';
            const isCorrect = isMulti 
                ? (userAnswer && q.answer.length === userAnswer.length && 
                   q.answer.every(a => userAnswer.includes(a)))
                : userAnswer === q.answer;
            
            if (!isCorrect) {
                wrongIds.push(q.id);
            }
        });
        
        if (wrongIds.length === 0) {
            utils.showToast('没有错题需要复习');
            return;
        }
        
        // 设置为错题复习模式
        state.currentQuestions = questionBank.questions.filter(q => wrongIds.includes(q.id));
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.examMode = false;
        state.currentCategory = null;
        
        this.navigateTo('practice');
    },

    // 复习错题
    reviewWrongQuestion(questionId) {
        const question = utils.getWrongQuestions().find(q => q.id === questionId);
        if (!question) return;
        
        state.currentQuestions = [question];
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.examMode = false;
        state.currentCategory = question.categoryId;
        
        this.navigateTo('practice');
    },

    // 初始化
    init() {
        // 绑定标签导航
        document.querySelectorAll('.tab-item').forEach(tab => {
            tab.addEventListener('click', () => {
                const page = tab.dataset.page;
                if (page) {
                    this.navigateTo(page);
                }
            });
        });
        
        // 绑定弹窗按钮
        document.getElementById('modalCancel').addEventListener('click', () => this.closeModal());
        document.getElementById('modalConfirm').addEventListener('click', () => {
            this.closeModal();
            if (state.examTimer) clearInterval(state.examTimer);
            state.examMode = false;
            this.navigateTo('home');
        });
        
        // 渲染首页
        this.render();
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
