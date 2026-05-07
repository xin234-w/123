// ============================================
// Python数据分析全栈学习包 - 内容数据 (增强版)
// ============================================

const siteContent = {

    // 首页
    home: {
        title: '首页',
        breadcrumb: ['首页'],
        html: `
        <div class="home-hero">
            <h1>Python数据分析全栈学习包</h1>
            <p class="subtitle">含挖掘 + 建模 · 从思维到实战的完整学习路径</p>
        </div>

        <div class="home-stats">
            <div class="stat-card">
                <div class="stat-number">5</div>
                <div class="stat-label">核心思维模型</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">3</div>
                <div class="stat-label">专家争议深度解析</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">10</div>
                <div class="stat-label">实操实训项目</div>
            </div>
        </div>

        <div class="home-sections">
            <div class="section-card" onclick="navigateTo('mindset1')">
                <div class="section-card-header">
                    <div class="section-icon blue">🧠</div>
                    <h3>一、5个全领域专家共识核心思维模型</h3>
                </div>
                <p>每个思维均包含：定义 + 业务价值 + 极简可运行代码示例（基于pandas、scikit-learn等常用库，可直接复制运行），覆盖挖掘、建模、业务落地全场景。</p>
                <div class="item-count">📖 5个思维模型</div>
            </div>

            <div class="section-card" onclick="navigateTo('debate1')">
                <div class="section-card-header">
                    <div class="section-icon purple">⚔️</div>
                    <h3>二、3大业内专家硬核争议</h3>
                </div>
                <p>每个争议均包含：争议核心、正反双方硬核论据、适用场景、选型建议，避免"盲目跟风学算法"，精准匹配自身学习/业务需求。</p>
                <div class="item-count">📖 3大争议</div>
            </div>

            <div class="section-card" onclick="navigateTo('project1')">
                <div class="section-card-header">
                    <div class="section-icon green">💻</div>
                    <h3>三、10个全覆盖实操实训项目</h3>
                </div>
                <p>每个项目均包含：核心知识点、业务场景、详细任务要求、<strong>分步解答</strong>、交互式答题功能、最终交付物。</p>
                <div class="item-count">📖 10个实操项目</div>
            </div>
        </div>

        <div class="mode-switch">
            <button class="mode-btn active" data-mode="learn" onclick="setMode('learn')">📚 学习模式</button>
            <button class="mode-btn" data-mode="quiz" onclick="setMode('quiz')">✍️ 答题模式</button>
        </div>

        <div class="quiz-hint" id="quizHint">
            <span class="hint-icon">💡</span>
            <span>答题模式下，任务解答会被隐藏，需要先完成任务才能查看答案哦！</span>
        </div>
        `
    },

    // ========== 一、核心思维模型 ==========
    mindset1: {
        title: '思维1：维度拆解 + 细分分群思维',
        section: '一、核心思维模型',
        breadcrumb: ['首页', '核心思维模型', '思维1：维度拆解+细分分群'],
        html: `
        <div class="page-content">
            <h1>思维1：维度拆解 + 细分分群思维</h1>
            <p class="page-desc">将复杂数据按"业务维度 + 算法维度"拆分，把大群体拆成小群体，针对性挖掘规律、制定策略</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📌 定义</div>
                <p>将复杂数据按"业务维度（时间/品类/地区）+ 算法维度（聚类/分桶）"拆分，把大群体拆成小群体，针对性挖掘规律、制定策略，核心是<strong>"分而治之"</strong>。</p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">💡 业务价值</div>
                <p>避免"一刀切"分析，比如将用户拆成高价值/流失/新用户，商品拆成爆款/长尾款，精准匹配运营动作；无标签数据通过聚类发现隐藏分群。</p>
            </div>

            <h2>代码示例（用户分群 + 聚类结合）</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. 读取用户数据（消费金额、频次、最近消费天数）
df = pd.read_csv("user_data.csv")
data = df[["消费金额", "消费频次", "最近消费天数"]]

# 2. 数据标准化（聚类必备）
scaler = StandardScaler()
data_scaled = scaler.fit_transform(data)

# 3. KMeans聚类分群（拆成4类用户）
kmeans = KMeans(n_clusters=4, random_state=42)
df["用户分群"] = kmeans.fit_predict(data_scaled)

# 4. 结合业务维度（地区）进一步拆解
df.groupby(["地区", "用户分群"])["消费金额"].sum()</code></pre>
            </div>

            <div class="info-card purple">
                <div class="info-card-title purple">🔑 核心要点</div>
                <ul>
                    <li>聚类前<strong>必须标准化</strong>数据，否则量纲差异会导致偏差</li>
                    <li>业务维度与算法维度结合，才能产出可落地的策略</li>
                    <li>分群后需解读每个群体的特征，避免"为聚类而聚类"</li>
                </ul>
            </div>
        </div>
        `
    },

    mindset2: {
        title: '思维2：变量关联 & 因子挖掘思维',
        section: '一、核心思维模型',
        breadcrumb: ['首页', '核心思维模型', '思维2：变量关联&因子挖掘'],
        html: `
        <div class="page-content">
            <h1>思维2：变量关联 & 因子挖掘思维</h1>
            <p class="page-desc">通过统计方法和算法模型，挖掘变量间的隐藏关系，找到"影响结果的关键因子"</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📌 定义</div>
                <p>通过统计方法（相关性）、算法模型（关联规则、随机森林），挖掘变量间的隐藏关系，找到<strong>"影响结果的关键因子"</strong>，拒绝"凭经验判断"。</p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">💡 业务价值</div>
                <p>搞懂"什么影响销量""用户为什么流失""哪些商品一起买"，比如通过关联规则发现购物车组合，通过随机森林找到影响营收的核心指标。</p>
            </div>

            <h2>代码示例1：关联规则（购物车分析）</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">from mlxtend.frequent_patterns import apriori, association_rules
df_cart = pd.read_csv("cart_data.csv")
cart_encoded = pd.get_dummies(df_cart["商品名称"], prefix="商品")
frequent_itemsets = apriori(cart_encoded, min_support=0.05, use_colnames=True)
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)</code></pre>
            </div>

            <h2>代码示例2：随机森林特征重要性</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">from sklearn.ensemble import RandomForestRegressor
X = df[["广告费", "客单价", "活动次数"]]
y = df["销量"]
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X, y)
pd.DataFrame({"特征": X.columns, "重要性": rf.feature_importances_}).sort_values("重要性", ascending=False)</code></pre>
            </div>
        </div>
        `
    },

    mindset3: {
        title: '思维3：无监督挖掘思维',
        section: '一、核心思维模型',
        breadcrumb: ['首页', '核心思维模型', '思维3：无监督挖掘'],
        html: `
        <div class="page-content">
            <h1>思维3：无监督挖掘思维</h1>
            <p class="page-desc">在没有明确标签的情况下，自动发现数据中的隐藏结构和规律</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📌 定义</div>
                <p>在没有明确标签（如"是否流失""是否爆款"）的情况下，通过聚类、分群、行为相似度分析，<strong>自动发现数据中的隐藏结构和规律</strong>。</p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">💡 业务价值</div>
                <p>挖掘未知价值，比如无标签用户数据中发现"高潜力用户"，商品数据中发现"隐性关联品类"，无需人工标注，降低分析成本。</p>
            </div>

            <h2>代码示例（KMeans商品聚类 + 可视化）</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

df_goods = pd.read_csv("goods_data.csv")
goods_data = df_goods[["销量", "客单价", "好评率", "库存"]]

scaler = StandardScaler()
goods_scaled = scaler.fit_transform(goods_data)
kmeans = KMeans(n_clusters=3, random_state=42)
df_goods["商品分群"] = kmeans.fit_predict(goods_scaled)

pca = PCA(n_components=2)
goods_pca = pca.fit_transform(goods_scaled)
plt.scatter(goods_pca[:,0], goods_pca[:,1], c=df_goods["商品分群"], cmap="viridis")
plt.show()</code></pre>
            </div>
        </div>
        `
    },

    mindset4: {
        title: '思维4：拟合 & 预测建模思维',
        section: '一、核心思维模型',
        breadcrumb: ['首页', '核心思维模型', '思维4：拟合&预测建模'],
        html: `
        <div class="page-content">
            <h1>思维4：拟合 & 预测建模思维</h1>
            <p class="page-desc">从历史数据中量化规律，实现数值预测和分类判断，用数据替代"拍脑袋"</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📌 定义</div>
                <p>通过回归、树模型、时序拟合等方法，从历史数据中量化规律，实现<strong>"数值预测"（如销量预测）</strong>、<strong>"分类判断"（如用户流失判断）</strong>。</p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">💡 业务价值</div>
                <p>提前预判趋势，比如预测下月销量、预估广告投放效果、判断用户是否会流失，为决策提供数据支撑。</p>
            </div>

            <h2>代码示例（多元线性回归 + 随机森林预测销量）</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score

X = df[["广告费", "活动次数", "客单价"]]
y = df["销量"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred_lr = lr.predict(X_test)
print("线性回归R²得分：", r2_score(y_test, y_pred_lr))</code></pre>
            </div>
        </div>
        `
    },

    mindset5: {
        title: '思维5：业务模型落地思维',
        section: '一、核心思维模型',
        breadcrumb: ['首页', '核心思维模型', '思维5：业务模型落地'],
        html: `
        <div class="page-content">
            <h1>思维5：业务模型落地思维</h1>
            <p class="page-desc">所有分析、算法、模型都不为"炫技"，而是落地到具体业务场景，解决实际问题</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📌 定义</div>
                <p>所有分析、算法、模型都不为"炫技"，而是<strong>落地到具体业务场景</strong>，解决实际问题——聚类服务用户运营、关联规则服务捆绑销售、回归服务营收预估。</p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">💡 业务价值</div>
                <p>避免"分析与业务脱节"，确保每一次分析都能产出可执行的策略。</p>
            </div>

            <h2>代码示例（RFM分层 + 业务策略落地）</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">df_rfm = pd.read_csv("user_rfm.csv")
df_rfm["R分"] = pd.qcut(df_rfm["最近消费天数"], 5, labels=[5,4,3,2,1])
df_rfm["F分"] = pd.qcut(df_rfm["消费频次"], 5, labels=[1,2,3,4,5])
df_rfm["M分"] = pd.qcut(df_rfm["消费金额"], 5, labels=[1,2,3,4,5])
df_rfm["RFM总分"] = df_rfm["R分"].astype(int) + df_rfm["F分"].astype(int) + df_rfm["M分"].astype(int)

def rfm_level(score):
    if score >= 13: return "高价值用户"
    elif score >= 8: return "潜力用户"
    else: return "流失/低价值用户"

df_rfm["用户等级"] = df_rfm["RFM总分"].apply(rfm_level)
df_rfm["用户等级"].value_counts()</code></pre>
            </div>
        </div>
        `
    },

    // ========== 二、专家争议 ==========
    debate1: {
        title: '争议1：传统统计分析 VS 机器学习挖掘',
        section: '二、专家争议',
        breadcrumb: ['首页', '专家争议', '争议1：传统统计 VS 机器学习'],
        html: `
        <div class="page-content">
            <h1>争议1：传统统计分析 VS 机器学习挖掘</h1>
            <p class="page-desc">做业务数据分析，优先用传统统计方法，还是直接上机器学习挖掘方法？</p>

            <div class="info-card orange">
                <div class="info-card-title orange">🎯 争议核心</div>
                <p>做业务数据分析，优先用"分组、交叉、相关性"等传统统计方法，还是直接上"聚类、随机森林、关联规则"等机器学习挖掘方法？</p>
            </div>

            <div class="debate-box">
                <div class="debate-header pro">✅ 正方：传统统计优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>可解释性极强</strong>：业务人员能快速理解，便于落地策略</li>
                        <li><strong>简单稳定、成本低</strong>：无需复杂的数据预处理、模型调参</li>
                        <li><strong>覆盖80%业务场景</strong>：大部分业务分析用传统统计就能解决</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header con">❌ 反方：机器学习挖掘优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>能挖掘隐藏规律</strong>：如啤酒和尿布的经典关联</li>
                        <li><strong>适配复杂场景</strong>：高维度数据、非线性关系</li>
                        <li><strong>可扩展性强</strong>：从描述分析升级到预测分析</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header advice">📋 选型建议</div>
                <div class="debate-body">
                    <ul>
                        <li>新手入门、简单场景 → 传统统计</li>
                        <li>无标签数据、复杂关联、预测场景 → 机器学习</li>
                        <li><strong>最佳实践</strong>：先传统统计找规律，再用机器学习挖深层价值</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    },

    debate2: {
        title: '争议2：模型可解释性 VS 预测精度',
        section: '二、专家争议',
        breadcrumb: ['首页', '专家争议', '争议2：可解释性 VS 预测精度'],
        html: `
        <div class="page-content">
            <h1>争议2：模型可解释性 VS 预测精度</h1>
            <p class="page-desc">选择模型时，优先保证可解释性，还是优先追求预测精度？</p>

            <div class="info-card orange">
                <div class="info-card-title orange">🎯 争议核心</div>
                <p>选择模型时，优先保证"可解释性"（如线性回归），还是优先追求"预测精度"（如随机森林）？</p>
            </div>

            <div class="debate-box">
                <div class="debate-header pro">✅ 正方：可解释性优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>业务落地性强</strong>：能明确每个特征对结果的影响程度</li>
                        <li><strong>风险可控</strong>：出现预测偏差时能快速定位问题</li>
                        <li><strong>符合决策逻辑</strong>：企业需要明确的因果关系</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header con">❌ 反方：精度优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>业务价值更高</strong>：预测精度高意味着决策更准确</li>
                        <li><strong>适配复杂数据</strong>：黑盒模型能捕捉更复杂的规律</li>
                        <li><strong>可弥补可解释性</strong>：用特征重要性、部分依赖图</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header advice">📋 选型建议</div>
                <div class="debate-body">
                    <ul>
                        <li>业务策略落地、风险控制 → 可解释性优先</li>
                        <li>纯预测场景、数据复杂非线性 → 精度优先</li>
                        <li><strong>最佳实践</strong>：先用可解释模型搭建基础，再用高精度模型优化</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    },

    debate3: {
        title: '争议3：通用挖掘模型 VS 垂直业务专属模型',
        section: '二、专家争议',
        breadcrumb: ['首页', '专家争议', '争议3：通用模型 VS 垂直专属'],
        html: `
        <div class="page-content">
            <h1>争议3：通用挖掘模型 VS 垂直业务专属模型</h1>
            <p class="page-desc">直接使用通用算法模型，还是结合具体行业定制模型？</p>

            <div class="info-card orange">
                <div class="info-card-title orange">🎯 争议核心</div>
                <p>直接使用"通用算法模型"（如KMeans、Apriori），还是结合具体行业定制模型阈值、权重？</p>
            </div>

            <div class="debate-box">
                <div class="debate-header pro">✅ 正方：通用模型优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>高效快捷</strong>：无需定制，节省开发时间</li>
                        <li><strong>通用性强</strong>：同一模型可用于多种场景</li>
                        <li><strong>基础效果有保障</strong>：经过大量验证</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header con">❌ 反方：业务专属模型优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>贴合业务实际</strong>：不同行业核心指标不同</li>
                        <li><strong>结果更有价值</strong>：如RFM需定制阈值</li>
                        <li><strong>避免为模型而模型</strong>：聚焦业务痛点</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header advice">📋 选型建议</div>
                <div class="debate-body">
                    <ul>
                        <li>新手入门、快速验证 → 通用模型</li>
                        <li>有明确业务目标、行业特性明显 → 业务专属模型</li>
                        <li><strong>最佳实践</strong>：先用通用模型搭建基础，再结合业务调整</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    },

    // ========== 三、实操实训项目（增强版）==========

    project1: {
        title: '项目1：数据预处理高阶版',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目1：数据预处理高阶版'],
        html: `
        <div class="page-content">
            <h1>项目1：数据预处理高阶版</h1>
            <p class="page-desc">铺垫所有算法前置能力 · 电商用户行为数据预处理</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">缺失值处理</span>
                    <span class="tag blue">异常值处理</span>
                    <span class="tag blue">特征分桶</span>
                    <span class="tag blue">OneHotEncoder</span>
                    <span class="tag blue">StandardScaler</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商用户行为数据预处理，为后续聚类、回归、关联规则等算法做准备。</p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取模拟数据（user_behavior.csv），包含字段：用户ID、消费金额、消费频次、最近消费天数、性别、地区、注册时间、浏览时长</li>
                <li data-step="2"><strong>缺失值处理</strong>：消费金额/频次缺失用"中位数"填充，性别/地区缺失用"未知"填充，注册时间缺失直接删除</li>
                <li data-step="3"><strong>异常值处理</strong>：用"箱线图+3σ原则"识别消费金额的异常值，采用"中位数替换"</li>
                <li data-step="4"><strong>特征处理</strong>：消费金额分桶（低/中/高），性别/地区做OneHotEncoder编码</li>
                <li data-step="5"><strong>数据标准化</strong>：对消费金额、消费频次、最近消费天数做StandardScaler标准化</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">读取数据并查看基本信息</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <div class="code-header">
                                <span class="code-lang">📝 步骤1代码</span>
                            </div>
                            <pre><code class="language-python">import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

# 读取数据
df = pd.read_csv("user_behavior.csv")

# 查看数据基本信息
print("数据形状:", df.shape)
print("\\n数据前5行:")
print(df.head())
print("\\n缺失值统计:")
print(df.isnull().sum())
print("\\n数据类型:")
print(df.dtypes)</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong>首先导入必要的库，然后读取CSV文件。通过head()查看数据结构，通过isnull().sum()检查各列的缺失值数量。
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">处理缺失值</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <div class="code-header">
                                <span class="code-lang">📝 步骤2代码</span>
                            </div>
                            <pre><code class="language-python"># 处理缺失值
# 数值型用中位数填充（避免受异常值影响）
df["消费金额"].fillna(df["消费金额"].median(), inplace=True)
df["消费频次"].fillna(df["消费频次"].median(), inplace=True)

# 分类型用"未知"填充
df["性别"].fillna("未知", inplace=True)
df["地区"].fillna("未知", inplace=True)

# 注册时间缺失直接删除该行
df.dropna(subset=["注册时间"], inplace=True)

print("处理后缺失值统计:")
print(df.isnull().sum())</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>为什么用中位数？</strong>中位数不受极端值影响，比均值更稳健<br>
                            • <strong>为什么用"未知"？</strong>分类型数据无法用数值填充，"未知"表示缺失状态<br>
                            • <strong>为什么删除注册时间？</strong>时间字段无法合理推断，直接删除
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">识别和处理异常值</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <div class="code-header">
                                <span class="code-lang">📝 步骤3代码</span>
                            </div>
                            <pre><code class="language-python"># 3σ原则识别异常值
for col in ["消费金额", "浏览时长"]:
    mean = df[col].mean()
    std = df[col].std()
    lower = mean - 3 * std
    upper = mean + 3 * std
    
    # 标记异常值
    outliers = (df[col] < lower) | (df[col] > upper)
    print(f"{col}异常值数量: {outliers.sum()}")
    
    # 用中位数替换异常值（不删除数据）
    df.loc[outliers, col] = df[col].median()

print("\\n处理后消费金额统计:")
print(df["消费金额"].describe())</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>3σ原则：</strong>数据落在均值±3倍标准差之外的概率极小，这些被视为异常<br>
                            • <strong>为什么不删除？</strong>删除会损失样本量，用中位数替换更合理
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 4</span>
                        <span class="step-title">特征工程</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <div class="code-header">
                                <span class="code-lang">📝 步骤4代码</span>
                            </div>
                            <pre><code class="language-python"># 消费金额分桶（离散化）
df["消费等级"] = pd.cut(df["消费金额"], bins=3, labels=["低", "中", "高"])

# OneHotEncoder编码
df_encoded = pd.get_dummies(df, columns=["性别", "地区"], prefix=["性别", "地区"])

# 提取注册月份
df_encoded["注册月份"] = pd.to_datetime(df_encoded["注册时间"]).dt.month

print("特征处理后的列:")
print(df_encoded.columns.tolist())</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>pd.cut：</strong>将连续数值切割成几个区间（低/中/高）<br>
                            • <strong>get_dummies：</strong>将分类变量转换为0/1的独热编码，便于机器学习使用
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 5</span>
                        <span class="step-title">数据标准化并保存</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <div class="code-header">
                                <span class="code-lang">📝 步骤5代码</span>
                            </div>
                            <pre><code class="language-python"># 选择需要标准化的数值列
num_cols = ["消费金额", "消费频次", "最近消费天数", "浏览时长"]

# StandardScaler标准化
scaler = StandardScaler()
df_encoded[num_cols] = scaler.fit_transform(df_encoded[num_cols])

# 保存处理后的数据
df_encoded.to_csv("processed_data.csv", index=False)

print("标准化后数据预览:")
print(df_encoded[num_cols].head())
print("\\n✅ 预处理完成！数据已保存到 processed_data.csv")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>StandardScaler：</strong>将数据转换为均值0、标准差1的分布<br>
                            • <strong>为什么要标准化？</strong>不同特征的量纲差异大（如消费金额vs消费次数），不标准化会影响聚类、回归等算法的效果
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习1：</strong>在上述代码中，为什么数值型缺失值要用中位数填充，而不是均值？
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的答案..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'median')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <div class="code-block">
                            <div class="code-header">
                                <span class="code-lang">🐍 Python</span>
                                <button class="copy-btn" onclick="copyCode(this)">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    复制
                                </button>
                            </div>
                            <pre><code class="language-python"># 方法1：使用 pandas
median_value = df['amount'].median()
print(f"中位数: {median_value}")

# 方法2：使用 numpy
import numpy as np
median_value = np.median(df['amount'])
print(f"中位数: {median_value}")

# 方法3：手动计算（了解原理）
sorted_data = df['amount'].sort_values()
n = len(sorted_data)
if n % 2 == 0:
    median_value = (sorted_data.iloc[n//2 - 1] + sorted_data.iloc[n//2]) / 2
else:
    median_value = sorted_data.iloc[n//2]
print(f"中位数: {median_value}")</code></pre>
                        </div>
                    </div>
                </div>

                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习2：</strong>写出将"消费等级"分为5个等级（极低/低/中/高/极高）的代码
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的代码..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'cut5')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <div class="code-block">
                            <div class="code-header">
                                <span class="code-lang">🐍 Python</span>
                                <button class="copy-btn" onclick="copyCode(this)">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    复制
                                </button>
                            </div>
                            <pre><code class="language-python"># 使用 pd.cut 分成5个等级
df["消费等级"] = pd.cut(
    df["消费金额"], 
    bins=[0, 200, 500, 1000, 2000, float('inf')],
    labels=["极低", "低", "中", "高", "极高"]
)

# 或者使用 qcut 自动等频分箱
df["消费等级"] = pd.qcut(df["消费金额"], q=5, labels=["极低", "低", "中", "高", "极高"])</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - preprocess.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

# 1. 读取数据
df = pd.read_csv("user_behavior.csv")

# 2. 处理缺失值
df["消费金额"].fillna(df["消费金额"].median(), inplace=True)
df["消费频次"].fillna(df["消费频次"].median(), inplace=True)
df["性别"].fillna("未知", inplace=True)
df["地区"].fillna("未知", inplace=True)
df.dropna(subset=["注册时间"], inplace=True)

# 3. 处理异常值（3σ原则）
for col in ["消费金额", "浏览时长"]:
    mean, std = df[col].mean(), df[col].std()
    lower, upper = mean - 3*std, mean + 3*std
    outliers = (df[col] < lower) | (df[col] > upper)
    df.loc[outliers, col] = df[col].median()

# 4. 特征工程
df["消费等级"] = pd.cut(df["消费金额"], bins=3, labels=["低", "中", "高"])
df_encoded = pd.get_dummies(df, columns=["性别", "地区"], prefix=["性别", "地区"])
df_encoded["注册月份"] = pd.to_datetime(df_encoded["注册时间"]).dt.month

# 5. 标准化
scaler = StandardScaler()
num_cols = ["消费金额", "消费频次", "最近消费天数", "浏览时长"]
df_encoded[num_cols] = scaler.fit_transform(df_encoded[num_cols])

# 保存
df_encoded.to_csv("processed_data.csv", index=False)
print("预处理完成！")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>用均值填充含异常值的字段（导致数据失真）</li>
                <li>对所有类别字段都做OneHotEncoder（高基数字段会导致维度爆炸）</li>
                <li>忘记标准化数据（后续算法会受量纲影响）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>预处理代码文件（preprocess.py）</li>
                <li>处理前后的数据对比表</li>
                <li>预处理总结（说明处理逻辑）</li>
            </ul>
        </div>
        `
    },

    project2: {
        title: '项目2：多维统计 + 深度相关性分析',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目2：多维统计+相关性分析'],
        html: `
        <div class="page-content">
            <h1>项目2：多维统计 + 深度相关性分析</h1>
            <p class="page-desc">电商营收影响因子分析 · 找到"哪些指标影响营收"</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">描述统计</span>
                    <span class="tag blue">皮尔逊相关系数</span>
                    <span class="tag blue">斯皮尔曼相关系数</span>
                    <span class="tag blue">相关性热力图</span>
                </p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取项目1处理后的数据（processed_data.csv），新增"营收"字段（营收=消费金额×消费频次）</li>
                <li data-step="2"><strong>描述统计</strong>：计算营收、消费金额、消费频次的均值、中位数、标准差</li>
                <li data-step="3"><strong>相关性分析</strong>：计算皮尔逊和斯皮尔曼相关系数，绘制热力图</li>
                <li data-step="4"><strong>关联研判</strong>：分析哪些指标与营收强相关（|r|≥0.7）</li>
                <li data-step="5">得出结论：明确影响营收的核心指标</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">读取数据并计算营收</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# 读取预处理后的数据
df = pd.read_csv("processed_data.csv")

# 计算营收（注意：数据已标准化，需要还原后再计算）
# 营收 = 消费金额 × 消费频次
df["营收"] = df["消费金额"] * df["消费频次"]

print("数据形状:", df.shape)
print("\\n营收统计:")
print(df["营收"].describe())</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong>营收是一个派生字段，通过已有字段计算得出。这里直接用标准化后的值相乘来演示相关性分析。
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">描述统计分析</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 选择分析的数值列
cols = ["营收", "消费金额", "消费频次", "最近消费天数", "浏览时长"]

# 描述统计（均值、中位数、标准差、四分位数）
desc_stats = df[cols].describe()
print("描述统计表:")
print(desc_stats)

# 计算额外统计量
for col in cols:
    print(f"\\n{col}:")
    print(f"  均值: {df[col].mean():.4f}")
    print(f"  中位数: {df[col].median():.4f}")
    print(f"  标准差: {df[col].std():.4f}")
    print(f"  偏度: {df[col].skew():.4f}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>均值 vs 中位数：</strong>若两者差距大，说明数据有偏<br>
                            • <strong>标准差：</strong>反映数据的离散程度<br>
                            • <strong>偏度：</strong>正值表示右偏（存在较大极端值）
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">计算相关系数并绘制热力图</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 计算皮尔逊相关系数
pearson_corr = df[cols].corr(method="pearson")
print("皮尔逊相关系数矩阵:")
print(pearson_corr.round(3))

# 计算斯皮尔曼相关系数（更适合非线性关系）
spearman_corr = df[cols].corr(method="spearman")
print("\\n斯皮尔曼相关系数矩阵:")
print(spearman_corr.round(3))

# 绘制热力图
plt.figure(figsize=(10, 8))
sns.heatmap(pearson_corr, annot=True, cmap="RdBu_r", 
            center=0, fmt=".2f", square=True,
            linewidths=0.5, vmin=-1, vmax=1)
plt.title("相关性热力图（皮尔逊）")
plt.tight_layout()
plt.savefig("correlation_heatmap.png", dpi=150)
plt.show()</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>皮尔逊：</strong>衡量线性关系，值范围[-1, 1]<br>
                            • <strong>斯皮尔曼：</strong>衡量单调关系，适合有序分类或非线性<br>
                            • <strong>热力图颜色：</strong>红色正相关，蓝色负相关，颜色越深相关性越强
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 4</span>
                        <span class="step-title">找出强相关指标</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 找出与营收强相关的指标（|r| >= 0.7）
print("与营收强相关的指标 (|r| >= 0.7):")
for col in cols[1:]:  # 排除营收自己
    r = pearson_corr.loc["营收", col]
    if abs(r) >= 0.7:
        direction = "正相关 ↑" if r > 0 else "负相关 ↓"
        print(f"  ✓ {col}: r = {r:.3f} ({direction})")

# 检查多重共线性（指标之间 |r| >= 0.8）
print("\\n存在多重共线性的指标对 (|r| >= 0.8):")
for i in range(len(cols)):
    for j in range(i+1, len(cols)):
        r = pearson_corr.iloc[i, j]
        if abs(r) >= 0.8:
            print(f"  ⚠ {cols[i]} 与 {cols[j]}: r = {r:.3f}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>强相关标准：</strong>|r|≥0.7 表示强相关<br>
                            • <strong>多重共线性：</strong>两个特征高度相关时，只保留一个，避免回归系数失真
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习：</strong>皮尔逊相关系数和斯皮尔曼相关系数有什么区别？什么情况下应该用斯皮尔曼？
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的答案..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'correlation')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
                            <strong>主要区别：</strong><br>
                            • <strong>皮尔逊：</strong>衡量线性关系，适用于连续型、正态分布数据<br>
                            • <strong>斯皮尔曼：</strong>衡量单调关系，适用于排序数据、有异常值的数据<br><br>
                            <strong>应该用斯皮尔曼的情况：</strong><br>
                            1. 数据不满足正态分布<br>
                            2. 存在明显的异常值<br>
                            3. 变量是定序数据（如学历：高/中/低）<br>
                            4. 关系是单调但非线性的
                        </p>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - correlation_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv("processed_data.csv")
df["营收"] = df["消费金额"] * df["消费频次"]

cols = ["营收", "消费金额", "消费频次", "最近消费天数", "浏览时长"]

# 描述统计
desc_stats = df[cols].describe()
print("描述统计:\\n", desc_stats)

# 皮尔逊相关
pearson_corr = df[cols].corr(method="pearson")
print("\\n皮尔逊相关:\\n", pearson_corr.round(3))

# 热力图
plt.figure(figsize=(10, 8))
sns.heatmap(pearson_corr, annot=True, cmap="RdBu_r", 
            center=0, fmt=".2f", square=True)
plt.title("相关性热力图")
plt.savefig("correlation_heatmap.png", dpi=150)
plt.show()

# 强相关分析
print("\\n与营收强相关的指标:")
for col in cols[1:]:
    r = pearson_corr.loc["营收", col]
    if abs(r) >= 0.7:
        print(f"  {col}: r={r:.3f}")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>混淆皮尔逊和斯皮尔曼（皮尔逊适用于线性，斯皮尔曼适用于非线性/有序分类）</li>
                <li>误将相关性当作因果关系</li>
                <li>热力图不标注数值，无法清晰判断</li>
            </ul>
        </div>
        `
    },

    project3: {
        title: '项目3：购物车关联规则挖掘（Apriori算法）',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目3：购物车关联规则挖掘'],
        html: `
        <div class="page-content">
            <h1>项目3：购物车关联规则挖掘</h1>
            <p class="page-desc">Apriori算法 · 挖掘"哪些商品经常一起被购买"</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">Apriori算法</span>
                    <span class="tag blue">支持度</span>
                    <span class="tag blue">置信度</span>
                    <span class="tag blue">提升度</span>
                    <span class="tag blue">频繁项集</span>
                </p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取购物车数据（cart_data.csv），包含：订单ID、商品名称</li>
                <li data-step="2">将数据转换为one-hot格式（每行一个订单，每列一个商品）</li>
                <li data-step="3">用Apriori算法挖掘频繁项集（最小支持度=0.05）</li>
                <li data-step="4">生成关联规则（最小置信度=0.7）</li>
                <li data-step="5">筛选提升度>1的有效规则，输出Top10</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">理解关联规则三要素</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="info-card purple">
                            <div class="info-card-title purple">📖 核心概念</div>
                            <ul>
                                <li><strong>支持度 (Support)</strong>：商品A和B同时出现的概率<br>
                                    <code>Support(A→B) = 包含A和B的订单数 / 总订单数</code>
                                </li>
                                <li><strong>置信度 (Confidence)</strong>：购买A的用户中，同时购买B的比例<br>
                                    <code>Confidence(A→B) = 包含A和B的订单数 / 包含A的订单数</code>
                                </li>
                                <li><strong>提升度 (Lift)</strong>：规则的有效程度<br>
                                    <code>Lift(A→B) = Confidence(A→B) / Support(B)</code><br>
                                    Lift > 1 表示有效关联；Lift ≤ 1 表示无意义
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">数据预处理：转换为one-hot格式</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

# 读取购物车数据
df_cart = pd.read_csv("cart_data.csv")
print("原始数据:")
print(df_cart.head())

# 转换为one-hot格式
# 每行一个订单，每列一个商品，1=包含该商品
basket = df_cart.groupby(["订单ID", "商品名称"])["数量"].sum().unstack().fillna(0)
basket = basket.applymap(lambda x: 1 if x > 0 else 0)

print("\\nOne-hot格式:")
print(basket.head())</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong>Apriori算法需要输入布尔型矩阵（0/1格式）。groupby+unstack将数据转换为"订单×商品"的矩阵。
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">挖掘频繁项集</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 使用Apriori算法挖掘频繁项集
# min_support=0.05 表示至少出现在5%的订单中
frequent_itemsets = apriori(basket, min_support=0.05, use_colnames=True)

print(f"发现 {len(frequent_itemsets)} 个频繁项集:")
print(frequent_itemsets.sort_values("support", ascending=False).head(10))</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>频繁项集：</strong>经常一起出现的商品组合<br>
                            • <strong>支持度阈值：</strong>太低会噪声太多，太高可能没有有价值的规则
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 4</span>
                        <span class="step-title">生成关联规则</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 生成关联规则（最小置信度0.7）
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)

print(f"生成 {len(rules)} 条关联规则")

# 筛选有效规则（提升度 > 1）
valid_rules = rules[rules["lift"] > 1].sort_values("lift", ascending=False)

# 输出Top10
top10 = valid_rules.head(10)
print("\\n=== Top 10 关联规则 ===")
for idx, row in top10.iterrows():
    ante = ', '.join(list(row["antecedents"]))
    cons = ', '.join(list(row["consequents"]))
    print(f"{ante} → {cons}")
    print(f"  支持度:{row['support']:.3f} 置信度:{row['confidence']:.3f} 提升度:{row['lift']:.3f}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>Lift > 1：</strong>说明A和B不是独立事件，存在协同效应<br>
                            • <strong>Lift ≤ 1：</strong>说明A和B是独立事件，无实际关联价值
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习：</strong>如果发现"矿泉水→手机"的置信度很高（0.9），能否说明买矿泉水的人会买手机？应该如何判断？
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的答案..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'lift')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
                            <strong>不能直接下结论！</strong><br><br>
                            置信度高只能说明：买了矿泉水的人中，90%也买了手机。<br><br>
                            <strong>应该用 Lift（提升度）来判断：</strong><br>
                            • Lift = P(手机|矿泉水) / P(手机) <br>
                            • 如果 Lift > 1：矿泉水和手机真的有关联<br>
                            • 如果 Lift ≈ 1：可能是虚假关联（手机本来就卖得好）<br>
                            • <strong>提升度 = 置信度 / 基础购买率</strong>，才是真正的关联指标
                        </p>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - apriori_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

# 读取数据
df_cart = pd.read_csv("cart_data.csv")

# 转换为one-hot
basket = df_cart.groupby(["订单ID", "商品名称"])["数量"].sum().unstack().fillna(0)
basket = basket.applymap(lambda x: 1 if x > 0 else 0)

# 挖掘频繁项集
frequent_itemsets = apriori(basket, min_support=0.05, use_colnames=True)

# 生成关联规则
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)

# 筛选有效规则
valid_rules = rules[rules["lift"] > 1].sort_values("lift", ascending=False)
top10 = valid_rules.head(10)

print("Top 10 关联规则:")
print(top10[["antecedents", "consequents", "support", "confidence", "lift"]])</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>支持度设置不当（过高无结果，过低噪声多）</li>
                <li>不筛选提升度，误将无关组合当作有效规则</li>
                <li>商品名称不一致（如"耳机"和"无线耳机"）</li>
            </ul>
        </div>
        `
    },

    project4: {
        title: '项目4：KMeans 聚类分析实战',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目4：KMeans聚类分析实战'],
        html: `
        <div class="page-content">
            <h1>项目4：KMeans 聚类分析实战</h1>
            <p class="page-desc">用户 + 商品双场景聚类 · 实现"精准运营 + 商品优化"</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">KMeans聚类</span>
                    <span class="tag blue">肘部法则</span>
                    <span class="tag blue">PCA降维</span>
                    <span class="tag blue">数据标准化</span>
                </p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1"><strong>用户聚类</strong>：读取数据，选择特征，标准化，用肘部法则确定最优k值</li>
                <li data-step="2">用KMeans对用户分群，分析每个分群的特征</li>
                <li data-step="3"><strong>商品聚类</strong>：同样流程对商品进行聚类</li>
                <li data-step="4">用PCA降维可视化聚类结果</li>
                <li data-step="5">给出每个分群的运营建议</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">用肘部法则确定最优k值</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 读取数据
df = pd.read_csv("processed_data.csv")
features = ["消费金额", "消费频次", "最近消费天数", "浏览时长"]

# 标准化（聚类前必须标准化！）
scaler = StandardScaler()
data_scaled = scaler.fit_transform(df[features])

# 肘部法则：尝试不同的k值，计算SSE（簇内误差平方和）
sse = []
k_range = range(1, 11)
for k in k_range:
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(data_scaled)
    sse.append(km.inertia_)

# 绘制肘部图
plt.figure(figsize=(10, 6))
plt.plot(k_range, sse, 'bo-', linewidth=2, markersize=8)
plt.xlabel('k值（聚类数）')
plt.ylabel('SSE（簇内误差平方和）')
plt.title('肘部法则确定最优k值')
plt.grid(True)
plt.xticks(k_range)
plt.savefig('elbow_method.png', dpi=150)
plt.show()

print("观察肘部图，选择SSE下降变缓的点作为k值（通常3-5）")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>肘部法则：</strong>随着k增加，SSE逐渐减小。肘部位置表示"再增加k值，效果提升也不明显"<br>
                            • <strong>为什么必须标准化：</strong>消费金额（万元级）和浏览时长（分钟级）量纲不同，不标准化会导致聚类结果被大数值特征主导
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">执行KMeans聚类并解读分群</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 假设从肘部法则确定k=4
k = 4
kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
df["用户分群"] = kmeans.fit_predict(data_scaled)

# 分析每个分群的特征
print("=== 各分群用户特征 ===")
cluster_stats = df.groupby("用户分群")[features].mean()
print(cluster_stats.round(3))

# 各分群人数
print("\\n=== 各分群用户数量 ===")
print(df["用户分群"].value_counts().sort_index())

# 为每个分群命名
for i in range(k):
    cluster_data = cluster_stats.loc[i]
    print(f"\\n分群 {i}:")
    print(f"  消费金额: {cluster_data['消费金额']:.2f}")
    print(f"  消费频次: {cluster_data['消费频次']:.2f}")
    print(f"  最近消费: {cluster_data['最近消费天数']:.2f}天前")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • 观察每个分群的均值，理解其特征<br>
                            • 分群0可能：高消费、高频次、近期消费 → "高价值用户"<br>
                            • 分群1可能：低消费、低频次、很久未消费 → "流失用户"
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">PCA降维可视化</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">from sklearn.decomposition import PCA

# PCA降维到2维用于可视化
pca = PCA(n_components=2)
data_pca = pca.fit_transform(data_scaled)

# 绘制聚类结果
plt.figure(figsize=(10, 8))
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']
for i in range(k):
    mask = df["用户分群"] == i
    plt.scatter(data_pca[mask, 0], data_pca[mask, 1], 
                c=colors[i], label=f'分群 {i}', alpha=0.6, s=50)

# 标注聚类中心
centers_pca = pca.transform(kmeans.cluster_centers_)
plt.scatter(centers_pca[:, 0], centers_pca[:, 1], 
            c='black', marker='X', s=200, edgecolors='white', linewidths=2,
            label='聚类中心')

plt.xlabel('PCA维度1')
plt.ylabel('PCA维度2')
plt.title('用户聚类结果可视化')
plt.legend()
plt.grid(True, alpha=0.3)
plt.savefig('user_clustering.png', dpi=150)
plt.show()

print(f"PCA解释方差比例: {pca.explained_variance_ratio_}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>PCA降维：</strong>将4维特征压缩到2维，保留主要信息用于可视化<br>
                            • <strong>聚类中心：</strong>黑色X标记，表示每个分群的"典型用户"
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习：</strong>聚类后得到4个用户群体，请根据以下特征给每个群体命名并制定运营策略：<br>
                        • 分群0：高消费(1.5)、高频次(1.8)、近消费(0.5天)<br>
                        • 分群1：低消费(-0.8)、低频次(-0.6)、远消费(3.2天)<br>
                        • 分群2：中消费(0.2)、高频次(1.2)、中消费(1.8天)<br>
                        • 分群3：高消费(1.2)、低频次(-0.3)、远消费(4.5天)
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请给每个分群命名并制定运营策略..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'clustering')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
                            <strong>分群命名与运营策略：</strong><br><br>
                            <strong>分群0 - 超级VIP：</strong>高价值核心用户，提供专属VIP服务、优先新品体验<br>
                            <strong>分群1 - 流失风险用户：</strong>低活跃沉默用户，发送召回优惠券、推送活动通知<br>
                            <strong>分群2 - 活跃用户：</strong>稳定消费群体，会员积分激励、推荐关联商品<br>
                            <strong>分群3 - 大额非活跃用户：</strong>偶尔消费高价值用户，个性化推送、高端产品推荐
                        </p>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - kmeans_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

df = pd.read_csv("processed_data.csv")
features = ["消费金额", "消费频次", "最近消费天数", "浏览时长"]

# 标准化
scaler = StandardScaler()
data_scaled = scaler.fit_transform(df[features])

# 肘部法则确定k值
sse = [KMeans(n_clusters=k, random_state=42, n_init=10).fit(data_scaled).inertia_ 
       for k in range(1, 11)]

# KMeans聚类
k = 4
kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
df["用户分群"] = kmeans.fit_predict(data_scaled)

# PCA可视化
pca = PCA(n_components=2)
data_pca = pca.fit_transform(data_scaled)
plt.scatter(data_pca[:,0], data_pca[:,1], c=df["用户分群"], cmap="viridis")
plt.title("用户聚类结果")
plt.savefig("user_clustering.png")
plt.show()

# 分群特征
print(df.groupby("用户分群")[features].mean())</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>聚类前不标准化数据（量纲差异导致偏差）</li>
                <li>盲目设置k值，不做肘部法则</li>
                <li>只做聚类，不解读分群、不落地建议</li>
            </ul>
        </div>
        `
    },

    project5: {
        title: '项目5：RFM 模型用户分层',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目5：RFM模型用户分层'],
        html: `
        <div class="page-content">
            <h1>项目5：RFM 模型用户分层</h1>
            <p class="page-desc">企业通用运营模型 · 区分高价值、潜力、流失用户</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag purple">R Recency</span>
                    <span class="tag purple">F Frequency</span>
                    <span class="tag purple">M Monetary</span>
                    <span class="tag blue">分位数分箱</span>
                    <span class="tag blue">用户分层</span>
                </p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1">提取RFM三个指标：R（最近消费天数）、F（消费频次）、M（消费金额）</li>
                <li data-step="2">用分位数将R、F、M各分为5个等级（1-5分）</li>
                <li data-step="3">计算RFM总分，进行用户分层（高价值/潜力/一般/流失）</li>
                <li data-step="4">统计各分层用户数量和消费占比</li>
                <li data-step="5">制定每类用户的运营策略</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">理解RFM模型</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="info-card purple">
                            <div class="info-card-title purple">📖 RFM三要素</div>
                            <ul>
                                <li><strong>R (Recency) 最近消费</strong>：用户最后一次购买距今多久<br>
                                    → <em>越近越好</em>，近期消费的用户更可能复购</li>
                                <li><strong>F (Frequency) 消费频次</strong>：用户在一定周期内购买多少次<br>
                                    → <em>越多越好</em>，高频用户是忠实客户</li>
                                <li><strong>M (Monetary) 消费金额</strong>：用户累计消费了多少钱<br>
                                    → <em>越高越好</em>，高价值用户贡献更多营收</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">提取并打分RFM</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd

df = pd.read_csv("processed_data.csv")

# 提取RFM
rfm = df[["用户ID", "最近消费天数", "消费频次", "消费金额"]].copy()
rfm.columns = ["用户ID", "R", "F", "M"]

# R打分：最近消费天数越少，分数越高（反向）
# 用qcut分成5份，用labels反向排列
rfm["R分"] = pd.qcut(rfm["R"], q=5, labels=[5, 4, 3, 2, 1]).astype(int)

# F打分：消费频次越多，分数越高（正向）
rfm["F分"] = pd.qcut(rfm["F"].rank(method="first"), q=5, labels=[1, 2, 3, 4, 5]).astype(int)

# M打分：消费金额越高，分数越高（正向）
rfm["M分"] = pd.qcut(rfm["M"].rank(method="first"), q=5, labels=[1, 2, 3, 4, 5]).astype(int)

print("RFM打分结果:")
print(rfm.head(10))</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>pd.qcut：</strong>按分位数分箱，保证每个等级人数大致相等<br>
                            • <strong>R需要反向：</strong>最近消费天数越少越好，所以标签从5到1<br>
                            • <strong>rank(method="first")：</strong>处理重复值，确保每个值都有唯一排名
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">用户分层</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 计算RFM总分
rfm["RFM总分"] = rfm["R分"] + rfm["F分"] + rfm["M分"]
print(f"RFM总分范围: {rfm['RFM总分'].min()} ~ {rfm['RFM总分'].max()}")

# 用户分层
def rfm_level(row):
    r, f, m = row["R分"], row["F分"], row["M分"]
    
    if r >= 4 and f >= 4 and m >= 4:
        return "高价值用户"  # 全5分
    elif r >= 4 and f >= 3:
        return "潜力用户"   # R高，近期可能复购
    elif r >= 3 and f >= 3:
        return "一般用户"  # 中等价值
    elif r <= 2 and f <= 2:
        return "流失用户"  # R低F低，几乎不再购买
    else:
        return "一般用户"

rfm["用户等级"] = rfm.apply(rfm_level, axis=1)

print("\\n用户分层结果:")
print(rfm["用户等级"].value_counts())</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>RFM总分：</strong>范围3-15分<br>
                            • <strong>分层逻辑：</strong>根据R/F/M三个维度综合判断<br>
                            • <strong>高价值用户：</strong>R/F/M都高的用户，是核心资产
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 4</span>
                        <span class="step-title">分层统计与运营策略</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 各分层统计
stats = rfm.groupby("用户等级").agg(
    用户数=("用户ID", "count"),
    平均消费=("M", "mean"),
    平均频次=("F", "mean")
).round(2)

stats["用户占比"] = (stats["用户数"] / stats["用户数"].sum() * 100).round(1)
print("=== 各分层用户统计 ===")
print(stats)

# 运营策略
print("\\n=== 运营策略建议 ===")
strategies = {
    "高价值用户": "🎁 专属福利+积分翻倍+VIP客服",
    "潜力用户": "📧 定期推送+新品推荐+复购激励",
    "一般用户": "💰 优惠券活动+唤醒营销",
    "流失用户": "🔥 大额折扣+短信召回+限时活动"
}
for level, strategy in strategies.items():
    count = len(rfm[rfm["用户等级"] == level])
    print(f"{level} ({count}人): {strategy}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>差异化运营：</strong>不同层级用户需求不同，应采用不同策略<br>
                            • <strong>高价值用户：</strong>重点维护，避免流失<br>
                            • <strong>流失用户：</strong>召回成本高，需要大力度的激励
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习：</strong>一个用户的RFM打分为 R=5, F=2, M=4，请问这个用户应该属于哪个层级？应该采取什么运营策略？
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的分析..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'rfm')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
                            <strong>分析：</strong><br>
                            • R=5：最近刚消费，活跃度高<br>
                            • F=2：消费频次中等<br>
                            • M=4：消费金额较高<br><br>
                            <strong>用户层级：</strong>重要价值用户 / 高潜力用户<br><br>
                            <strong>运营策略：</strong><br>
                            • 提供VIP专属权益，提升忠诚度<br>
                            • 推送高客单价商品，推荐关联产品<br>
                            • 邀请参与会员活动，增强互动
                        </p>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - rfm_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd

df = pd.read_csv("processed_data.csv")
rfm = df[["用户ID", "最近消费天数", "消费频次", "消费金额"]].copy()
rfm.columns = ["用户ID", "R", "F", "M"]

# RFM打分
rfm["R分"] = pd.qcut(rfm["R"], q=5, labels=[5,4,3,2,1]).astype(int)
rfm["F分"] = pd.qcut(rfm["F"].rank(method="first"), q=5, labels=[1,2,3,4,5]).astype(int)
rfm["M分"] = pd.qcut(rfm["M"].rank(method="first"), q=5, labels=[1,2,3,4,5]).astype(int)
rfm["RFM总分"] = rfm["R分"] + rfm["F分"] + rfm["M分"]

# 分层
def rfm_level(row):
    r, f, m = row["R分"], row["F分"], row["M分"]
    if r>=4 and f>=4 and m>=4: return "高价值用户"
    elif r>=4 and f>=3: return "潜力用户"
    elif r>=3 and f>=3: return "一般用户"
    elif r<=2 and f<=2: return "流失用户"
    else: return "一般用户"

rfm["用户等级"] = rfm.apply(rfm_level, axis=1)
print(rfm["用户等级"].value_counts())</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>R指标打分错误（没有反向，导致"越久没买分数越高"）</li>
                <li>分层标准过于随意，未结合业务实际</li>
                <li>所有用户用同一套运营策略</li>
            </ul>
        </div>
        `
    },

    project6: {
        title: '项目6：一元 + 多元线性回归',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目6：一元+多元线性回归'],
        html: `
        <div class="page-content">
            <h1>项目6：一元 + 多元线性回归</h1>
            <p class="page-desc">销量影响因子量化 · 量化各因素对销量的影响程度</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">一元线性回归</span>
                    <span class="tag blue">多元线性回归</span>
                    <span class="tag blue">R²/MAE/MSE</span>
                    <span class="tag blue">回归系数解读</span>
                    <span class="tag blue">VIF多重共线性</span>
                </p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取销量数据（sales_data.csv），包含：日期、销量、广告费、活动次数、客单价、竞品价格</li>
                <li data-step="2">一元线性回归：广告费→销量，解读回归系数</li>
                <li data-step="3">多元线性回归：广告费+活动次数+客单价+竞品价格→销量</li>
                <li data-step="4">检测多重共线性（VIF>10需处理）</li>
                <li data-step="5">模型评估（R²、MAE、MSE），预测未来销量</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">理解回归分析核心指标</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="info-card purple">
                            <div class="info-card-title purple">📖 回归分析核心指标</div>
                            <ul>
                                <li><strong>R² (决定系数)</strong>：模型解释的方差比例，范围0-1，越接近1越好<br>
                                    → R²=0.85 表示模型解释了85%的销量变化</li>
                                <li><strong>MAE (平均绝对误差)</strong>：预测值与真实值的平均绝对偏差<br>
                                    → MAE=100 表示预测平均误差100件</li>
                                <li><strong>MSE (均方误差)</strong>：误差的平方的平均值，对大误差更敏感</li>
                                <li><strong>回归系数</strong>：X每增加1个单位，Y变化多少<br>
                                    → 系数=0.5 表示广告费每增加1元，销量增加0.5件</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">一元线性回归</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

# 读取数据
df = pd.read_csv("sales_data.csv")

# 一元线性回归：广告费 → 销量
X_simple = df[["广告费"]]  # 二维数组格式
y = df["销量"]

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(
    X_simple, y, test_size=0.2, random_state=42
)

# 训练模型
lr_simple = LinearRegression()
lr_simple.fit(X_train, y_train)

# 预测
y_pred = lr_simple.predict(X_test)

# 评估
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)

print("=== 一元线性回归结果 ===")
print(f"回归方程: 销量 = {lr_simple.intercept_:.2f} + {lr_simple.coef_[0]:.4f} × 广告费")
print(f"R² = {r2:.4f}")
print(f"MAE = {mae:.2f}")
print(f"\\n解读: 广告费每增加1元，销量预计增加 {lr_simple.coef_[0]:.2f} 件")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>X必须是二维：</strong>sklearn要求特征是2D数组，所以用[["广告费"]]<br>
                            • <strong>R²解读：</strong>0.8以上算较好，但不同场景标准不同<br>
                            • <strong>系数含义：</strong>广告费每增加1元，销量增加coef_个单位
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">多元线性回归</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 多元线性回归：多个因素 → 销量
features = ["广告费", "活动次数", "客单价", "竞品价格"]
X = df[features]
y = df["销量"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 训练
lr_multi = LinearRegression()
lr_multi.fit(X_train, y_train)
y_pred = lr_multi.predict(X_test)

# 评估
print("=== 多元线性回归结果 ===")
print(f"R² = {r2_score(y_test, y_pred):.4f}")
print(f"MAE = {mean_absolute_error(y_test, y_pred):.2f}")
print(f"MSE = {mean_squared_error(y_test, y_pred):.2f}")

# 回归系数
print("\\n=== 各因素影响程度 ===")
coef_df = pd.DataFrame({
    "因素": features,
    "系数": lr_multi.coef_
}).sort_values("系数", key=abs, ascending=False)

print(coef_df)

print("\\n回归方程:")
print(f"销量 = {lr_multi.intercept_:.2f} ", end="")
for f, c in zip(features, lr_multi.coef_):
    print(f"+ ({c:.4f})×{f}", end=" ")
print()</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>多因素分析：</strong>同时考虑多个因素，更接近实际<br>
                            • <strong>系数大小：</strong>系数绝对值越大，该因素对销量影响越大<br>
                            • <strong>系数方向：</strong>正数表示正向影响，负数表示负向影响
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 4</span>
                        <span class="step-title">多重共线性检测与预测应用</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># VIF检测多重共线性
from statsmodels.stats.outliers_influence import variance_inflation_factor

print("=== VIF多重共线性检测 ===")
vif_data = []
for i, col in enumerate(features):
    vif = variance_inflation_factor(X.values, i)
    vif_data.append({"因素": col, "VIF": vif})
    status = "⚠️ 需处理" if vif > 10 else "✅ 正常"
    print(f"{col}: VIF = {vif:.2f} {status}")

# 销量预测
print("\\n=== 销量预测 ===")
new_data = pd.DataFrame({
    "广告费": [1000],
    "活动次数": [3],
    "客单价": [200],
    "竞品价格": [150]
})
predicted_sales = lr_multi.predict(new_data)[0]
print(f"当月广告费1000元、3次活动、客单价200元、竞品价150元时：")
print(f"预测销量: {predicted_sales:.0f} 件")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>VIF > 10：</strong>存在严重共线性，需删除或合并变量<br>
                            • <strong>VIF < 10：</strong>共线性可接受<br>
                            • <strong>预测应用：</strong>根据计划投入的广告费、活动次数，预测销量
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习：</strong>某公司多元回归结果显示：<br>
                        • 广告费系数 = 0.5（正）<br>
                        • 竞品价格系数 = -0.8（负）<br>
                        • 客单价系数 = 0.3（正）<br>
                        请解读这三个系数的含义，以及对运营决策有什么指导意义？
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的解读..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'regression')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
                            <strong>系数解读：</strong><br><br>
                            <strong>广告费系数 = 0.5：</strong>广告投入增加1单位，销量增加0.5单位。建议增加广告预算<br><br>
                            <strong>竞品价格系数 = -0.8：</strong>竞品价格上涨1单位，自身销量下降0.8单位（替代效应）。建议关注竞品定价策略<br><br>
                            <strong>客单价系数 = 0.3：</strong>提高客单价能提升销量，但效果有限<br><br>
                            <strong>运营建议：</strong>重点增加广告投放、监控竞品价格、适时调整客单价策略
                        </p>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - regression_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

df = pd.read_csv("sales_data.csv")
features = ["广告费", "活动次数", "客单价", "竞品价格"]
X, y = df[features], df["销量"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)

print(f"R²: {r2_score(y_test, y_pred):.4f}")
print(f"MAE: {mean_absolute_error(y_test, y_pred):.2f}")
print(f"系数: {dict(zip(features, lr.coef_))}")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>忽略多重共线性（导致回归系数失真）</li>
                <li>盲目追求高R²，忽略业务意义</li>
                <li>未评估模型误差</li>
            </ul>
        </div>
        `
    },

    project7: {
        title: '项目7：随机森林回归 + 特征重要性',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目7：随机森林回归'],
        html: `
        <div class="page-content">
            <h1>项目7：随机森林回归 + 特征重要性</h1>
            <p class="page-desc">非线性预测 · 解决线性回归无法捕捉非线性关系的问题</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">随机森林回归</span>
                    <span class="tag blue">特征重要性</span>
                    <span class="tag blue">模型调参</span>
                    <span class="tag orange">n_estimators</span>
                    <span class="tag orange">max_depth</span>
                </p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1">用随机森林回归训练销量预测模型</li>
                <li data-step="2">调参对比（n_estimators、max_depth不同组合的R²、MAE）</li>
                <li data-step="3">分析特征重要性，找出Top3核心因素</li>
                <li data-step="4">对比随机森林与线性回归的优缺点</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">训练随机森林模型</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error

df = pd.read_csv("sales_data.csv")
features = ["广告费", "活动次数", "客单价", "竞品价格"]
X, y = df[features], df["销量"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# 训练随机森林
rf = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)
rf.fit(X_train, y_train)
y_pred = rf.predict(X_test)

print("=== 随机森林回归结果 ===")
print(f"R² = {r2_score(y_test, y_pred):.4f}")
print(f"MAE = {mean_absolute_error(y_test, y_pred):.2f}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>随机森林：</strong>集成多棵决策树，捕捉非线性关系<br>
                            • <strong>n_estimators：</strong>树的数量，越多越稳定但越慢<br>
                            • <strong>max_depth：</strong>每棵树的深度，太深容易过拟合
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">参数调优对比</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 参数调优
print("=== 参数调优对比 ===")
results = []
for n_est in [50, 100, 200]:
    for depth in [3, 5, 7, 10]:
        rf = RandomForestRegressor(
            n_estimators=n_est, max_depth=depth, random_state=42
        )
        rf.fit(X_train, y_train)
        y_pred = rf.predict(X_test)
        results.append({
            "n_estimators": n_est,
            "max_depth": depth,
            "R²": r2_score(y_test, y_pred),
            "MAE": mean_absolute_error(y_test, y_pred)
        })

results_df = pd.DataFrame(results)
results_df = results_df.sort_values("R²", ascending=False)
print(results_df.to_string(index=False))

# 找出最优参数
best = results_df.iloc[0]
print(f"\\n最优参数: n_estimators={int(best['n_estimators'])}, max_depth={int(best['max_depth'])}")
print(f"最优R²: {best['R²']:.4f}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>调优方法：</strong>网格搜索，尝试所有参数组合<br>
                            • <strong>选择标准：</strong>优先R²高、MAE低、参数不太复杂的模型<br>
                            • <strong>过拟合：</strong>max_depth太大可能导致过拟合（训练好，测试差）
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">特征重要性分析</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 用最优参数重新训练
best_rf = RandomForestRegressor(
    n_estimators=200, max_depth=7, random_state=42
)
best_rf.fit(X_train, y_train)

# 特征重要性
importance = pd.DataFrame({
    "特征": features,
    "重要性": best_rf.feature_importances_
}).sort_values("重要性", ascending=True)

print("=== 特征重要性排序 ===")
print(importance)

# 可视化
plt.figure(figsize=(10, 6))
colors = plt.cm.RdYlGn(importance["重要性"] / importance["重要性"].max())
plt.barh(importance["特征"], importance["重要性"], color=colors)
plt.xlabel("特征重要性")
plt.title("随机森林 - 特征重要性排序")
plt.tight_layout()
plt.savefig("feature_importance.png", dpi=150)
plt.show()

print("\\nTop 3 核心影响因素:")
for _, row in importance.tail(3).iloc[::-1].iterrows():
    print(f"  ✓ {row['特征']}: {row['重要性']:.4f}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>特征重要性：</strong>衡量每个特征对预测的贡献度<br>
                            • <strong>可视化：</strong>颜色越绿，重要性越高<br>
                            • <strong>业务价值：</strong>重点关注高重要性特征，优化资源配置
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习：</strong>随机森林的特征重要性显示"竞品价格"重要性最高(0.45)，能否说明"降低竞品价格就能提升销量"？为什么？
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的答案..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'importance')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
                            <strong>不能直接下结论！</strong><br><br>
                            特征重要性只能说明竞品价格对销量预测的贡献大，但<strong>不能说明因果关系</strong>。<br><br>
                            <strong>原因：</strong><br>
                            • 相关性 ≠ 因果性：竞品价格高可能是因为整体市场环境好<br>
                            • 我们无法控制竞品定价<br>
                            • 可能存在混淆变量（如促销活动同时影响两者）<br><br>
                            <strong>正确的解读：</strong>需要结合业务理解和进一步分析（如因果推断实验）来判断实际因果关系
                        </p>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - random_forest_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error

df = pd.read_csv("sales_data.csv")
features = ["广告费", "活动次数", "客单价", "竞品价格"]
X, y = df[features], df["销量"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

rf = RandomForestRegressor(n_estimators=200, max_depth=7, random_state=42)
rf.fit(X_train, y_train)
print(f"R²: {r2_score(y_test, rf.predict(X_test)):.4f}")

importance = pd.DataFrame({"特征": features, "重要性": rf.feature_importances_})
print(importance.sort_values("重要性", ascending=False))</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>参数过于极端（如max_depth=20）导致过拟合</li>
                <li>不做参数调参，直接用默认参数</li>
                <li>误将重要性当作因果关系</li>
            </ul>
        </div>
        `
    },

    project8: {
        title: '项目8：时间序列完整分析',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目8：时间序列完整分析'],
        html: `
        <div class="page-content">
            <h1>项目8：时间序列完整分析</h1>
            <p class="page-desc">趋势 + 周期 + 预测 · 识别销量趋势和季节性周期</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">日期处理</span>
                    <span class="tag blue">移动平均</span>
                    <span class="tag blue">趋势分析</span>
                    <span class="tag blue">ARIMA预测</span>
                </p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取时序数据，转换为datetime格式，按月度重采样</li>
                <li data-step="2">计算移动平均，绘制趋势图</li>
                <li data-step="3">识别季节性周期（热力图）</li>
                <li data-step="4">用ARIMA预测未来3个月销量</li>
                <li data-step="5">评估预测误差，给出库存建议</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">数据预处理与重采样</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# 读取数据
df = pd.read_csv("time_series_sales.csv")

# 转换日期格式
df["日期"] = pd.to_datetime(df["日期"])
df.set_index("日期", inplace=True)

# 按月重采样（计算每月总销量）
monthly = df["销量"].resample("M").sum()

print("月度销量数据:")
print(monthly.head(10))
print(f"\\n数据范围: {monthly.index.min()} ~ {monthly.index.max()}")
print(f"共 {len(monthly)} 个月")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>to_datetime：</strong>将字符串转换为日期对象<br>
                            • <strong>set_index：</strong>将日期设为索引，便于时间操作<br>
                            • <strong>resample("M")：</strong>按月聚合（Month）
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">趋势分析与移动平均</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 移动平均
ma_3 = monthly.rolling(window=3).mean()  # 3个月移动平均
ma_6 = monthly.rolling(window=6).mean()  # 6个月移动平均

# 绘制趋势图
plt.figure(figsize=(14, 6))
plt.plot(monthly.index, monthly.values, label="实际销量", alpha=0.6, linewidth=2)
plt.plot(ma_3.index, ma_3.values, label="3个月移动平均", linewidth=2)
plt.plot(ma_6.index, ma_6.values, label="6个月移动平均", linewidth=2)

plt.xlabel("日期")
plt.ylabel("销量")
plt.title("月度销量趋势分析")
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("sales_trend.png", dpi=150)
plt.show()

# 判断趋势
diff_3m = ma_3.iloc[-1] - ma_3.iloc[-4]
diff_6m = ma_6.iloc[-1] - ma_6.iloc[-6]
print(f"近3个月趋势: {'↑ 上升' if diff_3m > 0 else '↓ 下降'} ({diff_3m:+.0f})")
print(f"近6个月趋势: {'↑ 上升' if diff_6m > 0 else '↓ 下降'} ({diff_6m:+.0f})")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>移动平均：</strong>消除短期波动，显示长期趋势<br>
                            • <strong>窗口选择：</strong>窗口越大越平滑，但滞后越严重<br>
                            • <strong>趋势判断：</strong>比较不同时期的移动平均值
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">季节性周期分析</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import seaborn as sns

# 提取月份和年份
monthly_df = monthly.reset_index()
monthly_df.columns = ["日期", "销量"]
monthly_df["月份"] = monthly_df["日期"].dt.month
monthly_df["年份"] = monthly_df["日期"].dt.year

# 绘制季节性热力图
pivot_data = monthly_df.pivot_table(values="销量", index="年份", columns="月份", aggfunc="sum")

plt.figure(figsize=(12, 6))
sns.heatmap(pivot_data, annot=True, fmt=".0f", cmap="YlOrRd", 
            linewidths=0.5, cbar_kws={"label": "销量"})
plt.title("销量季节性分析（按月）")
plt.xlabel("月份")
plt.ylabel("年份")
plt.tight_layout()
plt.savefig("seasonal_heatmap.png", dpi=150)
plt.show()

# 找出销量高峰月份
monthly_avg = monthly_df.groupby("月份")["销量"].mean()
peak_months = monthly_avg.nlargest(3)
print("\\n销量高峰期月份（平均销量）:")
print(peak_months)</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>热力图：</strong>横轴月份、纵轴年份，颜色深浅表示销量高低<br>
                            • <strong>季节性：</strong>某些月份（如11月双11）销量明显偏高<br>
                            • <strong>业务价值：</strong>提前备货、策划活动
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 4</span>
                        <span class="step-title">ARIMA预测</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_error

# ARIMA模型
# p=1(自回归项), d=1(差分), q=1(移动平均项)
model = ARIMA(monthly, order=(1, 1, 1))
model_fit = model.fit()

# 预测未来3个月
forecast = model_fit.forecast(steps=3)
print("=== 未来3个月销量预测 ===")
future_dates = pd.date_range(start=monthly.index[-1], periods=4, freq="M")[1:]
for date, sales in zip(future_dates, forecast):
    print(f"{date.strftime('%Y-%m')}: 预测销量 {sales:.0f} 件")

# 模型评估
fitted = model_fit.fittedvalues
mae = mean_absolute_error(monthly[1:], fitted[1:])
print(f"\\n模型MAE: {mae:.2f}")
print(f"平均误差率: {mae/monthly.mean()*100:.1f}%")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>ARIMA参数：</strong>(p,d,q)需根据数据特点调整<br>
                            • <strong>差分d=1：</strong>使非平稳序列变得平稳<br>
                            • <strong>预测用途：</strong>库存规划、资源配置
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习：</strong>根据季节性热力图分析，电商行业通常在哪些月份销量较高？为什么？这种季节性对运营有什么指导意义？
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的分析..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'seasonal')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
                            <strong>高销量月份：</strong><br>
                            • 11月（双11）、12月（双12、圣诞节）、1月（元旦、春节）<br><br>
                            <strong>原因分析：</strong><br>
                            • 大促活动集中（双11、双12）<br>
                            • 节日消费冲动（送礼需求）<br>
                            • 年终奖发放促进消费<br><br>
                            <strong>运营指导意义：</strong><br>
                            • 提前备货、充足库存<br>
                            • 提前规划营销预算<br>
                            • 4-6月、8-9月为淡季，需策划活动刺激消费
                        </p>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - time_series_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

df = pd.read_csv("time_series_sales.csv")
df["日期"] = pd.to_datetime(df["日期"])
df.set_index("日期", inplace=True)

monthly = df["销量"].resample("M").sum()

# 移动平均
ma = monthly.rolling(3).mean()

# ARIMA预测
model = ARIMA(monthly, order=(1, 1, 1))
model_fit = model.fit()
forecast = model_fit.forecast(steps=3)
print("预测:", forecast)</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>未转换日期格式，无法进行时间操作</li>
                <li>移动平均窗口设置不当</li>
                <li>不分析平稳性就使用ARIMA</li>
            </ul>
        </div>
        `
    },

    project9: {
        title: '项目9：综合异常检测',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目9：综合异常检测'],
        html: `
        <div class="page-content">
            <h1>项目9：综合异常检测</h1>
            <p class="page-desc">统计 + 模型结合 · 识别异常订单和异常用户</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">3σ原则</span>
                    <span class="tag blue">箱线图</span>
                    <span class="tag blue">孤立森林</span>
                    <span class="tag blue">异常值解读</span>
                </p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取订单数据，包含：订单ID、用户ID、订单金额、下单时间、支付状态</li>
                <li data-step="2"><strong>统计方法</strong>：用3σ原则和箱线图识别订单金额异常</li>
                <li data-step="3"><strong>模型方法</strong>：用孤立森林识别异常订单</li>
                <li data-step="4">合并两种方法，分析异常类型</li>
                <li data-step="5">给出处理建议</li>
            </ol>

            <h2>💡 分步解答</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 1</span>
                        <span class="step-title">理解异常检测方法</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="info-card purple">
                            <div class="info-card-title purple">📖 异常检测两大方法</div>
                            <ul>
                                <li><strong>统计方法（3σ原则）</strong>：<br>
                                    假设数据服从正态分布，落在μ±3σ之外的概率极小（0.27%），视为异常<br>
                                    → 优点：简单直观；缺点：假设数据分布，不适用非正态数据</li>
                                <li><strong>统计方法（箱线图）</strong>：<br>
                                    用Q1-1.5×IQR和Q3+1.5×IQR作为边界，之外的视为异常<br>
                                    → 优点：不需要分布假设；缺点：对正常极端值敏感</li>
                                <li><strong>模型方法（孤立森林）</strong>：<br>
                                    通过随机切分数据，异常点更容易被"孤立"（更快被分离出来）<br>
                                    → 优点：无需假设分布，适合高维数据；缺点：需要调参</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 2</span>
                        <span class="step-title">统计方法检测异常</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_csv("order_data.csv")

# === 3σ原则 ===
mean_amt = df["订单金额"].mean()
std_amt = df["订单金额"].std()
lower_3sigma = mean_amt - 3 * std_amt
upper_3sigma = mean_amt + 3 * std_amt

sigma3_outliers = df[(df["订单金额"] < lower_3sigma) | (df["订单金额"] > upper_3sigma)]
print(f"3σ原则检测到 {len(sigma3_outliers)} 条异常订单")

# === 箱线图 ===
Q1 = df["订单金额"].quantile(0.25)
Q3 = df["订单金额"].quantile(0.75)
IQR = Q3 - Q1
lower_box = Q1 - 1.5 * IQR
upper_box = Q3 + 1.5 * IQR

box_outliers = df[(df["订单金额"] < lower_box) | (df["订单金额"] > upper_box)]
print(f"箱线图检测到 {len(box_outliers)} 条异常订单")

# 绘制箱线图
plt.figure(figsize=(10, 6))
plt.boxplot(df["订单金额"], vert=True)
plt.title("订单金额箱线图")
plt.ylabel("订单金额")
plt.savefig("boxplot.png", dpi=150)
plt.show()</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>3σ vs 箱线图：</strong>箱线图更宽松，会检测更多异常<br>
                            • <strong>边界值：</strong>Q1-1.5×IQR以下是下异常，Q3+1.5×IQR以上是上异常
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 3</span>
                        <span class="step-title">孤立森林检测异常</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">from sklearn.ensemble import IsolationForest

# 准备特征
features = ["订单金额", "下单频次", "支付时长"]
X = df[features].fillna(0)

# 孤立森林
iso_forest = IsolationForest(
    n_estimators=100,      # 树的数量
    contamination=0.05,    # 预期异常比例
    random_state=42
)
df["异常标签"] = iso_forest.fit_predict(X)

# 异常标签：-1表示异常，1表示正常
anomalies = df[df["异常标签"] == -1]
normal = df[df["异常标签"] == 1]

print(f"孤立森林检测到 {len(anomalies)} 条异常订单 ({len(anomalies)/len(df)*100:.1f}%)")

# 对比异常订单与正常订单
print("\\n=== 异常订单 vs 正常订单 ===")
print(f"异常订单平均金额: {anomalies['订单金额'].mean():.2f}")
print(f"正常订单平均金额: {normal['订单金额'].mean():.2f}")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>contamination：</strong>估计数据中异常比例，默认5%<br>
                            • <strong>异常特征：</strong>通常金额异常高/低、频次异常高但未付款
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">步骤 4</span>
                        <span class="step-title">异常分析与处理建议</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># 合并三种方法的异常
all_anomaly_ids = set(sigma3_outliers["订单ID"]) | \
                  set(box_outliers["订单ID"]) | \
                  set(anomalies["订单ID"])

print(f"合并后共有 {len(all_anomaly_ids)} 条异常订单")

# 分析异常类型
df_anomaly = df[df["订单ID"].isin(all_anomaly_ids)]

# 类型1: 高金额异常
high_amt = df_anomaly[df_anomaly["订单金额"] > upper_3sigma]

# 类型2: 异常高频下单
high_freq = df_anomaly.groupby("用户ID").size()
suspicious_users = high_freq[high_freq > high_freq.quantile(0.95)].index

print("\\n=== 异常类型分析 ===")
print(f"高金额异常订单: {len(high_amt)} 条")
print(f"可疑用户数: {len(suspicious_users)} 人")

# 处理建议
print("\\n=== 处理建议 ===")
print("1. 高金额异常订单 → 人工审核，确认是否为真实大额交易")
print("2. 高频小额订单 → 限制下单频次，防止刷单")
print("3. 未付款高金额订单 → 自动取消，释放库存")</code></pre>
                        </div>
                        <div class="step-explain">
                            <strong>📖 解析：</strong><br>
                            • <strong>合并方法：</strong>多种方法取并集，减少漏检<br>
                            • <strong>异常类型：</strong>刷单、误录、技术问题等<br>
                            • <strong>处理原则：</strong>人工复核重要异常，自动处理常规异常
                        </div>
                    </div>
                </div>
            </div>

            <h2>✍️ 实战练习</h2>

            <div class="quiz-section">
                <div class="quiz-card">
                    <div class="quiz-question">
                        <strong>练习：</strong>某电商发现一批订单：订单金额很高（>10000元）但状态是"未支付"。请分析可能的原因，以及应该如何处理？
                    </div>
                    <div class="quiz-input-area">
                        <textarea class="quiz-input" placeholder="请输入你的分析..."></textarea>
                        <button class="quiz-submit" onclick="checkQuiz(this, 'anomaly')">提交答案</button>
                        <button class="quiz-secondary" onclick="toggleAnswer(this)">🔍 查看参考答案</button>
                        <button class="quiz-secondary" onclick="resetQuiz(this)">🔄 重置</button>
                    </div>
                    <div class="quiz-feedback" style="display:none;"></div>
                    
                    <div class="answer-section" style="display:none;">
                        <div class="answer-header">参考答案</div>
                        <p style="font-size:14px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
                            <strong>可能原因：</strong><br>
                            • 误操作：用户加入购物车后犹豫<br>
                            • 价格对比：货比三家后选择其他平台<br>
                            • 支付问题：支付通道故障或限额<br>
                            • 恶意刷单：竞争对手或恶意用户故意占用库存<br><br>
                            <strong>处理建议：</strong><br>
                            • 发送订单催付短信/邮件<br>
                            • 检查支付通道是否正常<br>
                            • 设置订单超时自动释放库存<br>
                            • 分析未支付用户特征，优化定价或服务
                        </p>
                    </div>
                </div>
            </div>

            <h2>📝 完整参考答案</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - anomaly_detection.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">复制</button>
                </div>
                <pre><code class="language-python">import pandas as pd
from sklearn.ensemble import IsolationForest

df = pd.read_csv("order_data.csv")

# 3σ原则
mean, std = df["订单金额"].mean(), df["订单金额"].std()
sigma3_outliers = df[(df["订单金额"] < mean-3*std) | (df["订单金额"] > mean+3*std)]

# 孤立森林
iso = IsolationForest(n_estimators=100, contamination=0.05, random_state=42)
df["异常"] = iso.fit_predict(df[["订单金额", "下单频次", "支付时长"]].fillna(0))

anomalies = df[df["异常"] == -1]
print(f"异常订单数: {len(anomalies)}")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>将"正常极端值"当作异常（如高端商品本来就贵）</li>
                <li>只检测异常，不解读原因、不给建议</li>
                <li>孤立森林参数设置不当</li>
            </ul>
        </div>
        `
    },

    project10: {
        title: '项目10：全流程综合大项目',
        section: '三、实操实训项目',
        breadcrumb: ['首页', '实操实训项目', '项目10：全流程综合大项目'],
        html: `
        <div class="page-content">
            <h1>项目10：全流程综合大项目</h1>
            <p class="page-desc">完整分析师交付闭环 · 覆盖"数据→分析→建模→结论→落地"全链路</p>

            <div class="info-card purple">
                <div class="info-card-title purple">🎯 项目目标</div>
                <p>解决"如何提升营收"的业务问题，整合前面9个项目所学，输出完整的分析报告。</p>
            </div>

            <h2>📋 任务要求</h2>

            <ol class="task-list">
                <li data-step="1"><strong>数据准备</strong>：整合用户、商品、订单、销量数据</li>
                <li data-step="2"><strong>数据预处理</strong>：完成缺失值、异常值、特征处理</li>
                <li data-step="3"><strong>核心分析</strong>：关联规则 + 聚类 + 回归 + 时序分析</li>
                <li data-step="4"><strong>可视化</strong>：绘制5+张核心图表</li>
                <li data-step="5"><strong>结论落地</strong>：总结发现，制定3-5条业务策略</li>
                <li data-step="6"><strong>输出报告</strong>：800-1000字完整分析报告</li>
            </ol>

            <h2>💡 分步解答框架</h2>

            <div class="solution-section">
                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">第一步</span>
                        <span class="step-title">数据整合与预处理</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

# 读取所有数据源
df_users = pd.read_csv("processed_data.csv")  # 项目1处理后的用户数据
df_goods = pd.read_csv("goods_data.csv")       # 商品数据
df_orders = pd.read_csv("order_data.csv")      # 订单数据
df_sales = pd.read_csv("sales_data.csv")        # 销量数据

print("=" * 50)
print("数据概况")
print("=" * 50)
print(f"用户数据: {df_users.shape}")
print(f"商品数据: {df_goods.shape}")
print(f"订单数据: {df_orders.shape}")
print(f"销量数据: {df_sales.shape}")

# 数据预处理（参考项目1）
# 1. 处理缺失值
# 2. 处理异常值
# 3. 特征工程
# 4. 标准化

print("\\n✅ 数据整合完成")</code></pre>
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">第二步</span>
                        <span class="step-title">用户分析与商品分析</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># === 用户分析：RFM分层 ===
# 参考项目5的RFM代码
rfm = df_users[["用户ID", "最近消费天数", "消费频次", "消费金额"]].copy()
rfm["R分"] = pd.qcut(rfm["最近消费天数"], 5, labels=[5,4,3,2,1]).astype(int)
rfm["F分"] = pd.qcut(rfm["消费频次"].rank(method="first"), 5, labels=[1,2,3,4,5]).astype(int)
rfm["M分"] = pd.qcut(rfm["消费金额"].rank(method="first"), 5, labels=[1,2,3,4,5]).astype(int)
rfm["用户等级"] = rfm.apply(lambda x: "高价值" if x["R分"]+x["F分"]+x["M分"]>=13 else "一般", axis=1)

# === 商品分析：KMeans聚类 ===
# 参考项目4的商品聚类代码
from sklearn.cluster import KMeans
goods_features = df_goods[["销量", "客单价", "好评率"]]
scaler = StandardScaler()
goods_scaled = scaler.fit_transform(goods_features)
kmeans = KMeans(n_clusters=3, random_state=42)
df_goods["商品等级"] = kmeans.fit_predict(goods_scaled)

print("用户分层完成")
print("商品分级完成")</code></pre>
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">第三步</span>
                        <span class="step-title">销量预测与关联分析</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python"># === 销量预测：随机森林 ===
# 参考项目7代码
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

features = ["广告费", "活动次数", "客单价"]
X = df_sales[features]
y = df_sales["销量"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

rf = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)
rf.fit(X_train, y_train)

# 特征重要性
importance = pd.DataFrame({
    "特征": features,
    "重要性": rf.feature_importances_
}).sort_values("重要性", ascending=False)

print("=== 影响销量的核心因素 ===")
print(importance)

# === 商品关联：Apriori ===
# 参考项目3代码
from mlxtend.frequent_patterns import apriori, association_rules
# ... 关联规则挖掘代码

print("\\n销量预测和关联分析完成")</code></pre>
                        </div>
                    </div>
                </div>

                <div class="solution-step">
                    <div class="step-header" onclick="toggleStep(this)">
                        <span class="step-number">第四步</span>
                        <span class="step-title">可视化与报告输出</span>
                        <span class="step-toggle">▼</span>
                    </div>
                    <div class="step-content" style="display:none;">
                        <div class="code-block">
                            <pre><code class="language-python">import matplotlib.pyplot as plt
import seaborn as sns

fig, axes = plt.subplots(2, 3, figsize=(18, 12))

# 1. 用户分群图
# axes[0,0] = PCA聚类可视化

# 2. RFM分层饼图
# axes[0,1] = 用户等级分布

# 3. 相关性热力图
# axes[0,2] = 各因素相关性

# 4. 销量趋势图
# axes[1,0] = 时序趋势+预测

# 5. 特征重要性图
# axes[1,1] = 随机森林特征重要性

# 6. 商品关联规则
# axes[1,2] = 关联规则可视化

plt.tight_layout()
plt.savefig("综合分析图表.png", dpi=150)
print("可视化图表已保存")</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <h2>📊 分析结论与策略建议</h2>

            <div class="info-card green">
                <div class="info-card-title green">💡 核心发现</div>
                <ul>
                    <li><strong>高价值用户特征：</strong>RFM总分≥13的用户占总用户15%，贡献了45%的营收</li>
                    <li><strong>销量核心影响因子：</strong>广告费（重要性0.42）> 活动次数（0.28）> 客单价（0.18）</li>
                    <li><strong>商品关联：</strong>"手机+耳机"、"电脑+键盘"是高频关联组合</li>
                    <li><strong>季节性：</strong>11月、6月是销量高峰期，需提前备货</li>
                </ul>
            </div>

            <div class="info-card orange">
                <div class="info-card-title orange">📋 业务策略建议</div>
                <ol>
                    <li><strong>精准运营：</strong>针对高价值用户推出专属福利（积分翻倍、VIP客服），提升复购率</li>
                    <li><strong>捆绑销售：</strong>将"手机+耳机"、"电脑+键盘"进行捆绑促销，提升客单价</li>
                    <li><strong>广告优化：</strong>加大广告投入（核心影响因素），集中在大促前夕投放</li>
                    <li><strong>库存管理：</strong>11月、6月前提前备货30%，避免缺货</li>
                    <li><strong>流失召回：</strong>对RFM总分<8的用户发送大额优惠券，唤醒沉睡用户</li>
                </ol>
            </div>

            <h2>📝 完整报告模板</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">📄 分析报告模板</span>
                </div>
                <pre><code class="language-markdown"># 电商营收提升分析报告

## 一、数据概况
- 数据时间范围、样本量
- 数据质量概述

## 二、核心分析
### 2.1 用户分层分析
### 2.2 商品关联分析
### 2.3 销量预测分析
### 2.4 时序趋势分析

## 三、核心发现
- 发现1：...
- 发现2：...
- 发现3：...

## 四、策略建议
### 4.1 短期策略（1-3个月）
### 4.2 中期策略（3-6个月）
### 4.3 长期策略（6个月以上）

## 五、预期效果
- 预计营收提升X%
- 预计用户留存率提升X%

## 附录：分析方法与代码</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>数据整合混乱（字段不匹配、格式不一致）</li>
                <li>分析无重点，堆砌方法</li>
                <li>结论无数据支撑，策略无法落地</li>
            </ul>
        </div>
        `
    }
};

// 页面顺序
const pageOrder = [
    'home',
    'mindset1', 'mindset2', 'mindset3', 'mindset4', 'mindset5',
    'debate1', 'debate2', 'debate3',
    'project1', 'project2', 'project3', 'project4', 'project5',
    'project6', 'project7', 'project8', 'project9', 'project10'
];
