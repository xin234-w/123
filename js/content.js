// ============================================
// Python数据分析全栈学习包 - 内容数据
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
                <p>每个项目均包含：核心知识点、业务场景、详细任务要求、新手必踩坑、最终交付物，由浅入深，覆盖所有重点分析方法。</p>
                <div class="item-count">📖 10个实操项目</div>
            </div>
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
                <pre><code class="language-python"># 关联规则（购物车分析，Apriori算法）
from mlxtend.frequent_patterns import apriori, association_rules
df_cart = pd.read_csv("cart_data.csv")
# 商品编码（one-hot）
cart_encoded = pd.get_dummies(df_cart["商品名称"], prefix="商品")
# 挖掘频繁项集（支持度≥0.05）
frequent_itemsets = apriori(cart_encoded, min_support=0.05, use_colnames=True)
# 生成关联规则（置信度≥0.7）
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
X = df[["广告费", "客单价", "活动次数"]]  # 特征
y = df["销量"]  # 目标变量
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X, y)
# 输出特征重要性（找到影响销量的关键因子）
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
from sklearn.decomposition import PCA  # 降维可视化

# 1. 商品数据（销量、客单价、好评率、库存）
df_goods = pd.read_csv("goods_data.csv")
goods_data = df_goods[["销量", "客单价", "好评率", "库存"]]

# 2. 标准化+聚类
scaler = StandardScaler()
goods_scaled = scaler.fit_transform(goods_data)
kmeans = KMeans(n_clusters=3, random_state=42)
df_goods["商品分群"] = kmeans.fit_predict(goods_scaled)

# 3. PCA降维，可视化聚类结果
pca = PCA(n_components=2)
goods_pca = pca.fit_transform(goods_scaled)
plt.scatter(goods_pca[:,0], goods_pca[:,1], c=df_goods["商品分群"], cmap="viridis")
plt.xlabel("PCA维度1")
plt.ylabel("PCA维度2")
plt.title("商品聚类结果可视化")
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
                <p>通过回归、树模型、时序拟合等方法，从历史数据中量化规律，实现<strong>"数值预测"（如销量预测）</strong>、<strong>"分类判断"（如用户流失判断）</strong>，用数据替代"拍脑袋"。</p>
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

# 1. 准备数据（特征：广告费、活动次数、客单价；目标：销量）
X = df[["广告费", "活动次数", "客单价"]]
y = df["销量"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. 多元线性回归预测
lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred_lr = lr.predict(X_test)
print("线性回归R²得分：", r2_score(y_test, y_pred_lr))

# 3. 随机森林回归预测（非线性场景更优）
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
y_pred_rf = rf.predict(X_test)
print("随机森林R²得分：", r2_score(y_test, y_pred_rf))</code></pre>
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
                <p>所有分析、算法、模型都不为"炫技"，而是<strong>落地到具体业务场景，解决实际问题</strong>——聚类服务用户运营、关联规则服务捆绑销售、回归服务营收预估。</p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">💡 业务价值</div>
                <p>避免"分析与业务脱节"，确保每一次分析都能产出可执行的策略，比如聚类分群后制定"高价值用户专属福利"，关联规则后推出"商品捆绑套餐"。</p>
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
                <pre><code class="language-python"># 1. RFM用户分层（业务落地核心模型）
df_rfm = pd.read_csv("user_rfm.csv")
# 定义分层标准（业务定制，可调整）
df_rfm["R分"] = pd.qcut(df_rfm["最近消费天数"], 5, labels=[5,4,3,2,1])  # 1=最差，5=最好
df_rfm["F分"] = pd.qcut(df_rfm["消费频次"], 5, labels=[1,2,3,4,5])
df_rfm["M分"] = pd.qcut(df_rfm["消费金额"], 5, labels=[1,2,3,4,5])
# 计算RFM总分
df_rfm["RFM总分"] = df_rfm["R分"].astype(int) + df_rfm["F分"].astype(int) + df_rfm["M分"].astype(int)
# 业务分层（落地运营策略）
def rfm_level(score):
    if score >= 13: return "高价值用户"  # 专属福利+复购激励
    elif score >= 8: return "潜力用户"   # 引导消费+提升频次
    else: return "流失/低价值用户"       # 唤醒活动+优惠券
df_rfm["用户等级"] = df_rfm["RFM总分"].apply(rfm_level)
# 输出各等级用户数量，用于制定运营策略
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
                        <li><strong>可解释性极强</strong>：比如"同比增长10%""客单价与复购率正相关（r=0.8）"，业务人员能快速理解，便于落地策略</li>
                        <li><strong>简单稳定、成本低</strong>：无需复杂的数据预处理、模型调参，用pandas就能实现，新手易上手，且结果不易出错</li>
                        <li><strong>覆盖80%业务场景</strong>：大部分业务分析（如销量对比、结构占比、指标关联），用传统统计就能解决，无需过度复杂</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header con">❌ 反方：机器学习挖掘优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>能挖掘隐藏规律</strong>：传统统计无法发现"无标签数据的分群""商品间的隐性关联"（如啤酒和尿布），机器学习可实现</li>
                        <li><strong>适配复杂场景</strong>：当数据维度多（如10+个特征）、关系非线性（如广告费与销量不是正比），传统统计效果差，随机森林、聚类等更适配</li>
                        <li><strong>可扩展性强</strong>：能从"描述分析"升级到"预测分析"，比如用回归预测销量，用聚类做用户生命周期管理，支撑长期决策</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header advice">📋 适用场景 & 选型建议</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>优先用传统统计</strong>：新手入门、简单业务场景（如月度销量对比、品类占比）、需要快速出结论、业务人员需理解分析逻辑</li>
                        <li><strong>优先用机器学习挖掘</strong>：无标签数据（如用户分群）、复杂关联（如购物车分析）、预测场景（如销量预估）、高维度数据（10+特征）</li>
                        <li><strong>最佳实践</strong>：先做传统统计（描述、对比、相关），找到基础规律，再用机器学习挖掘深层价值（分群、预测），两者结合</li>
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
                <p>选择模型时，优先保证"可解释性"（如线性回归、决策树），还是优先追求"预测精度"（如随机森林、梯度提升树）？</p>
            </div>

            <div class="debate-box">
                <div class="debate-header pro">✅ 正方：可解释性优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>业务落地性强</strong>：可解释的模型（如线性回归）能明确"每个特征对结果的影响程度"（如广告费每增加1元，销量增加0.5元），业务人员能据此制定具体策略</li>
                        <li><strong>风险可控</strong>：出现预测偏差时，能快速定位问题（如某特征异常影响结果），便于调整模型</li>
                        <li><strong>符合业务决策逻辑</strong>：企业决策需要"明确的因果关系"，而非"黑盒预测"，可解释性模型能提供因果支撑</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header con">❌ 反方：精度优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>业务价值更高</strong>：预测精度高意味着"决策更准确"，比如销量预测误差从10%降到5%，能减少库存积压、提升营收</li>
                        <li><strong>适配复杂数据</strong>：现实业务中，变量关系多为非线性（如用户消费行为），黑盒模型（随机森林、XGBoost）能捕捉更复杂的规律</li>
                        <li><strong>可通过辅助方法弥补可解释性</strong>：比如用"特征重要性""部分依赖图"，让黑盒模型的结果变得可理解，无需完全牺牲精度</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header advice">📋 适用场景 & 选型建议</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>可解释性优先</strong>：业务策略落地（如运营活动设计）、风险控制（如异常检测）、需要向老板/业务方汇报分析逻辑</li>
                        <li><strong>精度优先</strong>：纯预测场景（如销量预测、用户流失预测）、无需向业务方解释模型逻辑、数据复杂且非线性</li>
                        <li><strong>最佳实践</strong>：先用可解释模型（线性回归、决策树）搭建基础，再用高精度模型（随机森林）优化预测结果，用特征重要性、可视化等方法提升可解释性</li>
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
            <p class="page-desc">直接使用通用算法模型，还是结合具体行业定制模型阈值、权重、分群逻辑？</p>

            <div class="info-card orange">
                <div class="info-card-title orange">🎯 争议核心</div>
                <p>直接使用"通用算法模型"（如通用KMeans、通用Apriori），还是结合具体行业（电商/零售）定制模型阈值、权重、分群逻辑？</p>
            </div>

            <div class="debate-box">
                <div class="debate-header pro">✅ 正方：通用模型优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>高效快捷</strong>：通用模型无需定制，直接调用库就能实现，节省开发/学习时间，新手易上手</li>
                        <li><strong>通用性强</strong>：同一模型（如KMeans）可用于电商用户分群、零售商品分群，无需重新学习新模型</li>
                        <li><strong>基础效果有保障</strong>：通用模型经过大量验证，能满足大部分基础挖掘需求，无需过度定制</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header con">❌ 反方：业务专属模型优先</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>贴合业务实际</strong>：不同行业的核心指标、业务逻辑不同，通用模型的阈值（如KMeans的k值、Apriori的支持度）不适用</li>
                        <li><strong>结果更有价值</strong>：比如电商RFM分层，需结合"客单价、复购周期"定制阈值，通用阈值会导致分群偏差，无法落地运营</li>
                        <li><strong>避免"为模型而模型"</strong>：专属模型能聚焦业务痛点，比如零售行业的"商品关联规则"，需排除"刚需商品+附属商品"的无效关联</li>
                    </ul>
                </div>
            </div>

            <div class="debate-box">
                <div class="debate-header advice">📋 适用场景 & 选型建议</div>
                <div class="debate-body">
                    <ul>
                        <li><strong>通用模型优先</strong>：新手入门、快速验证想法、无明确业务痛点、基础挖掘需求（如简单用户分群）</li>
                        <li><strong>业务专属模型优先</strong>：有明确业务目标（如电商捆绑销售、零售用户唤醒）、行业特性明显、需要落地具体策略</li>
                        <li><strong>最佳实践</strong>：先用通用模型搭建基础框架，再结合业务逻辑调整阈值、权重、分群规则，让模型结果贴合业务需求</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    },

    // ========== 三、实操实训项目 ==========
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
                    <span class="tag blue">重复值处理</span>
                    <span class="tag blue">异常值处理</span>
                    <span class="tag blue">特征分桶</span>
                    <span class="tag blue">离散化</span>
                    <span class="tag blue">LabelEncoder</span>
                    <span class="tag blue">OneHotEncoder</span>
                    <span class="tag blue">StandardScaler</span>
                    <span class="tag blue">归一化</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商用户行为数据预处理，为后续聚类、回归、关联规则等算法做准备（数据质量直接影响模型效果）。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取模拟数据（user_behavior.csv），包含字段：用户ID、消费金额、消费频次、最近消费天数、性别、地区、注册时间、浏览时长</li>
                <li data-step="2"><strong>缺失值处理</strong>：消费金额/频次缺失用"中位数"填充（避免均值受异常值影响），性别/地区缺失用"未知"填充，注册时间缺失直接删除</li>
                <li data-step="3"><strong>异常值处理</strong>：用"箱线图+3σ原则"识别消费金额、浏览时长的异常值，采用"中位数替换"（不删除数据，避免样本损失）</li>
                <li data-step="4"><strong>特征处理</strong>：① 消费金额分桶（低/中/高）；② 浏览时长离散化（短/中/长）；③ 性别/地区做OneHotEncoder编码；④ 注册时间提取"注册月份"特征</li>
                <li data-step="5"><strong>数据标准化</strong>：对消费金额、消费频次、最近消费天数做StandardScaler标准化，保存处理后的数据（processed_data.csv）</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - preprocess.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder

# 1. 读取数据
df = pd.read_csv("user_behavior.csv")

# 2. 缺失值处理
df["消费金额"].fillna(df["消费金额"].median(), inplace=True)
df["消费频次"].fillna(df["消费频次"].median(), inplace=True)
df["性别"].fillna("未知", inplace=True)
df["地区"].fillna("未知", inplace=True)
df.dropna(subset=["注册时间"], inplace=True)

# 3. 异常值处理（3σ原则）
for col in ["消费金额", "浏览时长"]:
    mean = df[col].mean()
    std = df[col].std()
    lower, upper = mean - 3*std, mean + 3*std
    mask = (df[col] < lower) | (df[col] > upper)
    df.loc[mask, col] = df[col].median()

# 4. 特征处理
df["消费等级"] = pd.cut(df["消费金额"], bins=3, labels=["低", "中", "高"])
df["浏览时长等级"] = pd.cut(df["浏览时长"], bins=3, labels=["短", "中", "长"])
df["注册月份"] = pd.to_datetime(df["注册时间"]).dt.month

# 5. 标准化
scaler = StandardScaler()
num_cols = ["消费金额", "消费频次", "最近消费天数"]
df[num_cols] = scaler.fit_transform(df[num_cols])
df.to_csv("processed_data.csv", index=False)
print("预处理完成！数据已保存到 processed_data.csv")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>用均值填充含异常值的字段（导致数据失真）</li>
                <li>对所有类别字段都做OneHotEncoder（高基数字段如地区，会导致维度爆炸）</li>
                <li>忘记标准化数据（后续聚类、回归模型会受量纲影响，结果偏差）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>预处理代码文件（preprocess.py）</li>
                <li>处理前后的数据对比表（Excel）</li>
                <li>预处理总结（100字，说明处理逻辑和避免的问题）</li>
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
                    <span class="tag blue">多因子关联研判</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商营收影响因子分析，找到"哪些指标影响营收"，为后续运营决策提供支撑。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取项目1处理后的数据（processed_data.csv），新增"营收"字段（营收=消费金额×消费频次）</li>
                <li data-step="2"><strong>描述统计</strong>：计算营收、消费金额、消费频次、浏览时长的均值、中位数、四分位数、标准差，分析数据分布特征</li>
                <li data-step="3"><strong>相关性分析</strong>：① 计算所有数值型字段的皮尔逊相关系数和斯皮尔曼相关系数；② 绘制相关性热力图（用seaborn）</li>
                <li data-step="4"><strong>关联研判</strong>：分析"哪些指标与营收强相关（|r|≥0.7）""哪些指标之间存在多重共线性（|r|≥0.8）"</li>
                <li data-step="5">得出结论：明确影响营收的核心指标（至少2个），说明相关性方向（正/负相关）</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - correlation_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# 1. 读取数据 + 计算营收
df = pd.read_csv("processed_data.csv")
df["营收"] = df["消费金额"] * df["消费频次"]

# 2. 描述统计
desc_stats = df[["营收", "消费金额", "消费频次", "浏览时长"]].describe()
print("描述统计：\\n", desc_stats)

# 3. 相关性分析
numeric_cols = ["营收", "消费金额", "消费频次", "浏览时长", "最近消费天数"]
pearson_corr = df[numeric_cols].corr(method="pearson")
spearman_corr = df[numeric_cols].corr(method="spearman")

# 绘制热力图
plt.figure(figsize=(10, 8))
sns.heatmap(pearson_corr, annot=True, cmap="RdBu_r", center=0,
            fmt=".2f", square=True, linewidths=0.5)
plt.title("相关性热力图（皮尔逊）")
plt.tight_layout()
plt.savefig("correlation_heatmap.png", dpi=150)
plt.show()

# 4. 关联研判
print("\\n与营收强相关的指标（|r|>=0.7）：")
for col in numeric_cols[1:]:
    r = pearson_corr.loc["营收", col]
    if abs(r) >= 0.7:
        direction = "正相关" if r > 0 else "负相关"
        print(f"  {col}: r={r:.3f} ({direction})")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>混淆皮尔逊和斯皮尔曼相关系数（皮尔逊适用于线性关系，斯皮尔曼适用于非线性/有序分类关系）</li>
                <li>误将"相关性"当作"因果关系"（如"浏览时长与营收正相关"，不代表"增加浏览时长就能提升营收"）</li>
                <li>热力图不调整颜色、不标注相关系数，导致无法清晰判断关联强度</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>相关性分析代码文件（correlation_analysis.py）</li>
                <li>描述统计表 + 相关性热力图</li>
                <li>关联分析结论（150字）</li>
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
            <p class="page-desc">Apriori算法 · 挖掘"哪些商品经常一起被加入购物车"</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">Apriori算法</span>
                    <span class="tag blue">频繁项集</span>
                    <span class="tag blue">支持度</span>
                    <span class="tag blue">置信度</span>
                    <span class="tag blue">提升度</span>
                    <span class="tag blue">商品组合分析</span>
                    <span class="tag blue">捆绑销售</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商购物车分析，挖掘"哪些商品经常一起被加入购物车"，为捆绑销售、商品陈列提供策略支撑（经典"啤酒尿布"场景）。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取模拟购物车数据（cart_data.csv），包含字段：订单ID、商品名称（如"手机、耳机、充电器"）</li>
                <li data-step="2"><strong>数据预处理</strong>：将每个订单的商品拆分，转换成one-hot编码格式（每行一个订单，每列一个商品，1=包含，0=不包含）</li>
                <li data-step="3">用Apriori算法挖掘频繁项集：设置最小支持度=0.05</li>
                <li data-step="4">生成关联规则：设置最小置信度=0.7，计算每条规则的支持度、置信度、提升度</li>
                <li data-step="5">筛选有价值的规则：提升度>1（说明商品组合有协同效应），筛选出Top10关联规则</li>
                <li data-step="6"><strong>业务建议</strong>：基于关联规则，给出3条捆绑销售建议</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - apriori_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

# 1. 读取购物车数据
df_cart = pd.read_csv("cart_data.csv")

# 2. One-hot编码
cart_encoded = pd.get_dummies(df_cart["商品名称"], prefix="商品")
cart basket = cart_encoded.groupby(df_cart["订单ID"]).max()

# 3. Apriori挖掘频繁项集
frequent_itemsets = apriori(cart_basket, min_support=0.05, use_colnames=True)

# 4. 生成关联规则
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)

# 5. 筛选有价值规则（提升度>1）
valid_rules = rules[rules["lift"] > 1].sort_values("lift", ascending=False)
top10 = valid_rules.head(10)
print("Top10关联规则：\\n", top10[["antecedents", "consequents",
      "support", "confidence", "lift"]])</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>支持度设置过高（导致没有频繁项集）或过低（导致频繁项集过多，无价值）</li>
                <li>不筛选提升度，误将"无关商品组合"当作有效规则（如"矿泉水+手机"，提升度≤1）</li>
                <li>商品名称有重复（如"耳机"和"无线耳机"被当作不同商品，影响关联结果）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>关联规则挖掘代码文件（apriori_analysis.py）</li>
                <li>Top10关联规则表（包含支持度、置信度、提升度）</li>
                <li>捆绑销售策略建议（200字）</li>
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
                    <span class="tag blue">数据标准化</span>
                    <span class="tag blue">肘部法则</span>
                    <span class="tag blue">聚类可视化</span>
                    <span class="tag blue">PCA降维</span>
                    <span class="tag blue">业务落地</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商用户分群 + 商品分群，实现"精准运营 + 商品优化"，比如对高价值用户推送专属福利，对爆款商品加大库存。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1"><strong>用户聚类</strong>：① 读取项目1处理后的数据，选择特征：消费金额、消费频次、最近消费天数、浏览时长；② 标准化数据；③ 用肘部法则确定最优k值（k=3~5）；④ 用KMeans聚类，给用户打上分群标签；⑤ 分析每个分群的用户特征</li>
                <li data-step="2"><strong>商品聚类</strong>：① 读取模拟商品数据（goods_data.csv）；② 标准化数据；③ 确定最优k值，KMeans聚类；④ 分析每个分群的商品特征</li>
                <li data-step="3"><strong>可视化</strong>：用PCA降维，绘制用户聚类、商品聚类的可视化图表（标注分群标签）</li>
                <li data-step="4"><strong>业务落地</strong>：针对每个用户分群、商品分群，各给出2条运营/优化建议</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - kmeans_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

# 肘部法则确定最优k值
def elbow_method(data, max_k=10):
    inertias = []
    for k in range(1, max_k + 1):
        km = KMeans(n_clusters=k, random_state=42, n_init=10)
        km.fit(data)
        inertias.append(km.inertia_)
    plt.plot(range(1, max_k+1), inertias, 'bo-')
    plt.xlabel('k值')
    plt.ylabel('SSE（簇内误差平方和）')
    plt.title('肘部法则')
    plt.show()

# 用户聚类
df = pd.read_csv("processed_data.csv")
features = ["消费金额", "消费频次", "最近消费天数", "浏览时长"]
scaler = StandardScaler()
data_scaled = scaler.fit_transform(df[features])

elbow_method(data_scaled)  # 观察拐点确定k值

kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
df["用户分群"] = kmeans.fit_predict(data_scaled)

# PCA可视化
pca = PCA(n_components=2)
data_pca = pca.fit_transform(data_scaled)
plt.scatter(data_pca[:,0], data_pca[:,1], c=df["用户分群"], cmap="viridis")
plt.title("用户聚类结果")
plt.show()

# 各分群特征统计
print(df.groupby("用户分群")[features].mean())</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>聚类前不标准化数据（如消费金额万元级和浏览时长分钟级，量纲差异导致聚类偏差）</li>
                <li>盲目设置k值（不做肘部法则，直接设k=4，导致分群无业务意义）</li>
                <li>只做聚类，不解读分群特征、不落地业务建议（沦为"炫技"，无实际价值）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>聚类分析代码文件（kmeans_analysis.py）</li>
                <li>肘部法则图、聚类可视化图</li>
                <li>分群特征解读 + 业务建议（300字）</li>
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
                    <span class="tag blue">RFM模型</span>
                    <span class="tag purple">Recency</span>
                    <span class="tag purple">Frequency</span>
                    <span class="tag purple">Monetary</span>
                    <span class="tag blue">分位数分箱</span>
                    <span class="tag blue">用户分层</span>
                    <span class="tag blue">运营策略</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商用户生命周期管理，区分高价值、潜力、流失用户，制定差异化运营策略，提升用户留存和营收。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取项目1处理后的数据，提取RFM三个核心指标：① R（最近消费天数）；② F（消费频次）；③ M（消费金额）</li>
                <li data-step="2"><strong>指标分箱</strong>：用分位数（qcut）将R、F、M各分为5个等级（1=最差，5=最好），其中R指标"值越小越好"，需反向打分</li>
                <li data-step="3">计算RFM总分（总分=R分+F分+M分），并进行用户分层，至少分为4类：高价值用户、潜力用户、一般用户、流失用户</li>
                <li data-step="4">统计各分层用户的数量、占比、总消费金额占比</li>
                <li data-step="5"><strong>运营策略</strong>：针对每类用户，制定具体的运营动作</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - rfm_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd

df = pd.read_csv("processed_data.csv")

# 提取RFM指标
rfm = df[["用户ID", "最近消费天数", "消费频次", "消费金额"]].copy()
rfm.columns = ["用户ID", "R", "F", "M"]

# 分箱打分（R反向，F和M正向）
rfm["R分"] = pd.qcut(rfm["R"], 5, labels=[5,4,3,2,1]).astype(int)
rfm["F分"] = pd.qcut(rfm["F"], 5, labels=[1,2,3,4,5], duplicates='drop').astype(int)
rfm["M分"] = pd.qcut(rfm["M"], 5, labels=[1,2,3,4,5], duplicates='drop').astype(int)

# 计算总分 + 分层
rfm["RFM总分"] = rfm["R分"] + rfm["F分"] + rfm["M分"]

def rfm_level(score):
    if score >= 13: return "高价值用户"
    elif score >= 9: return "潜力用户"
    elif score >= 5: return "一般用户"
    else: return "流失用户"

rfm["用户等级"] = rfm["RFM总分"].apply(rfm_level)

# 统计各分层
stats = rfm.groupby("用户等级").agg(
    用户数量=("用户ID", "count"),
    平均消费=("M", "mean")
).reset_index()
stats["占比"] = (stats["用户数量"] / stats["用户数量"].sum() * 100).round(1)
print(stats)</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>R指标打分错误（没有反向，导致"最近消费天数越多，分数越高"，与业务逻辑相悖）</li>
                <li>分层标准过于随意（如总分≥10为高价值用户，未结合业务实际调整）</li>
                <li>运营策略同质化（所有用户用同一套策略，未体现分层价值）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>RFM分层代码文件（rfm_analysis.py）</li>
                <li>各分层用户统计表格</li>
                <li>分层运营策略方案（300字）</li>
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
            <p class="page-desc">销量影响因子量化 · 量化"广告费、活动次数、客单价"对销量的影响</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">一元线性回归</span>
                    <span class="tag blue">多元线性回归</span>
                    <span class="tag blue">R²</span>
                    <span class="tag blue">MAE</span>
                    <span class="tag blue">MSE</span>
                    <span class="tag blue">回归系数解读</span>
                    <span class="tag blue">VIF多重共线性</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商销量预测与影响因子分析，量化"广告费、活动次数、客单价"等指标对销量的影响，为广告投放、活动策划提供数据支撑。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取模拟销量数据（sales_data.csv），包含字段：日期、销量、广告费、活动次数、客单价、竞品价格</li>
                <li data-step="2"><strong>一元线性回归</strong>：以"广告费"为特征，"销量"为目标变量，训练回归模型，解读回归系数，评估模型效果（R²）</li>
                <li data-step="3"><strong>多元线性回归</strong>：以"广告费、活动次数、客单价、竞品价格"为特征，"销量"为目标变量，训练模型</li>
                <li data-step="4"><strong>模型优化</strong>：检测多重共线性（用VIF值），删除共线性强的特征（VIF>10），重新训练模型</li>
                <li data-step="5">模型评估与解读：计算R²、MAE、MSE，解读各特征的回归系数</li>
                <li data-step="6"><strong>预测应用</strong>：给定一组特征值（如广告费=1000元、活动次数=3次），预测销量</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - regression_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
from statsmodels.stats.outliers_influence import variance_inflation_factor

df = pd.read_csv("sales_data.csv")

# 一元线性回归
X_simple = df[["广告费"]]
y = df["销量"]
lr_simple = LinearRegression()
lr_simple.fit(X_simple, y)
print(f"一元回归 R²: {lr_simple.score(X_simple, y):.4f}")
print(f"回归系数: 广告费每增加1元，销量增加 {lr_simple.coef_[0]:.2f}")

# 多元线性回归
features = ["广告费", "活动次数", "客单价", "竞品价格"]
X = df[features]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

lr_multi = LinearRegression()
lr_multi.fit(X_train, y_train)
y_pred = lr_multi.predict(X_test)

print(f"\\n多元回归 R²: {r2_score(y_test, y_pred):.4f}")
print(f"MAE: {mean_absolute_error(y_test, y_pred):.2f}")
print(f"MSE: {mean_squared_error(y_test, y_pred):.2f}")

# 回归系数
coef_df = pd.DataFrame({"特征": features, "系数": lr_multi.coef_})
print("\\n回归系数：\\n", coef_df)

# 预测
new_data = pd.DataFrame({"广告费": [1000], "活动次数": [3], "客单价": [200], "竞品价格": [150]})
print(f"\\n预测销量: {lr_multi.predict(new_data)[0]:.0f}")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>忽略多重共线性（如"客单价"和"消费金额"高度相关，导致回归系数失真）</li>
                <li>盲目追求高R²，忽略模型的业务意义（如R²=0.9，但某特征的回归系数与业务逻辑相悖）</li>
                <li>未评估模型误差（如MAE过大，模型预测精度低，无法用于实际决策）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>回归分析代码文件（regression_analysis.py）</li>
                <li>模型评估指标表、回归系数表</li>
                <li>影响因子解读 + 预测示例（250字）</li>
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
            <p class="page-desc">非线性预测 · 解决"线性回归无法捕捉非线性关系"的问题</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">随机森林回归</span>
                    <span class="tag blue">特征重要性</span>
                    <span class="tag blue">模型调参</span>
                    <span class="tag orange">n_estimators</span>
                    <span class="tag orange">max_depth</span>
                    <span class="tag blue">模型评估</span>
                    <span class="tag blue">非线性关系</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商销量精准预测，解决"线性回归无法捕捉非线性关系"的问题（如广告费增加到一定程度，销量增长放缓），同时筛选核心影响特征。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1">沿用项目6的销量数据（sales_data.csv），特征和目标变量不变</li>
                <li data-step="2"><strong>数据拆分</strong>：将数据按7:3拆分为训练集和测试集</li>
                <li data-step="3">随机森林回归训练：设置n_estimators=100，max_depth=5，训练模型</li>
                <li data-step="4"><strong>模型调参</strong>：调整n_estimators（50/100/200）、max_depth（3/5/7），对比不同参数的模型效果（R²、MAE），选择最优参数</li>
                <li data-step="5"><strong>特征重要性分析</strong>：输出各特征的重要性排序，筛选出Top3核心影响特征</li>
                <li data-step="6"><strong>对比分析</strong>：将随机森林模型与项目6的多元线性回归模型对比，说明两者的优缺点和适用场景</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - random_forest_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error

df = pd.read_csv("sales_data.csv")
features = ["广告费", "活动次数", "客单价", "竞品价格"]
X = df[features]
y = df["销量"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 模型调参对比
results = []
for n_est in [50, 100, 200]:
    for depth in [3, 5, 7]:
        rf = RandomForestRegressor(n_estimators=n_est, max_depth=depth, random_state=42)
        rf.fit(X_train, y_train)
        y_pred = rf.predict(X_test)
        results.append({
            "n_estimators": n_est, "max_depth": depth,
            "R²": r2_score(y_test, y_pred),
            "MAE": mean_absolute_error(y_test, y_pred)
        })
results_df = pd.DataFrame(results)
print("参数调优结果：\\n", results_df.sort_values("R²", ascending=False))

# 最优模型
best_rf = RandomForestRegressor(n_estimators=200, max_depth=7, random_state=42)
best_rf.fit(X_train, y_train)

# 特征重要性
importance = pd.DataFrame({
    "特征": features,
    "重要性": best_rf.feature_importances_
}).sort_values("重要性", ascending=True)

plt.barh(importance["特征"], importance["重要性"], color="steelblue")
plt.xlabel("特征重要性")
plt.title("随机森林特征重要性排序")
plt.tight_layout()
plt.savefig("feature_importance.png", dpi=150)
plt.show()</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>模型参数设置过于极端（如max_depth=20，导致模型过拟合，测试集精度低）</li>
                <li>不做参数调参，直接使用默认参数（导致模型效果不佳）</li>
                <li>误将"特征重要性高"当作"因果关系"（如"竞品价格重要性高"，不代表"降低竞品价格就能提升销量"）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>随机森林代码文件（random_forest_analysis.py）</li>
                <li>不同参数模型效果对比表、特征重要性排序图</li>
                <li>模型对比分析报告（250字）</li>
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
                    <span class="tag blue">时间序列预处理</span>
                    <span class="tag blue">日期格式转换</span>
                    <span class="tag blue">重采样</span>
                    <span class="tag blue">移动平均</span>
                    <span class="tag blue">趋势分析</span>
                    <span class="tag blue">ARIMA</span>
                    <span class="tag blue">周期识别</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商月度销量时间序列分析，识别销量的趋势（上升/下降）、周期（月度/季度），预测未来3个月的销量，为库存规划提供支撑。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取模拟时序数据（time_series_sales.csv），包含字段：日期、销量</li>
                <li data-step="2"><strong>预处理</strong>：将日期字段转换为datetime格式，设置为索引，按"月度"重采样（计算每月总销量）</li>
                <li data-step="3"><strong>趋势分析</strong>：计算3个月移动平均，绘制"原始销量+移动平均"折线图，识别销量长期趋势</li>
                <li data-step="4"><strong>周期识别</strong>：绘制月度销量热力图，分析是否存在季节性周期（如"每年6月、11月销量偏高"）</li>
                <li data-step="5"><strong>时序预测</strong>：用ARIMA模型（p=1,d=1,q=1），基于历史数据预测未来3个月的销量</li>
                <li data-step="6">结果评估：计算预测值与历史实际值的MAE，分析预测误差，给出库存规划建议</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - time_series_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA

# 1. 读取数据 + 预处理
df = pd.read_csv("time_series_sales.csv")
df["日期"] = pd.to_datetime(df["日期"])
df.set_index("日期", inplace=True)

# 2. 月度重采样
monthly = df["销量"].resample("M").sum()

# 3. 移动平均趋势
ma_3 = monthly.rolling(window=3).mean()

plt.figure(figsize=(12, 6))
plt.plot(monthly, label="原始销量", alpha=0.6)
plt.plot(ma_3, label="3个月移动平均", linewidth=2)
plt.legend()
plt.title("月度销量趋势")
plt.tight_layout()
plt.savefig("trend.png", dpi=150)
plt.show()

# 4. ARIMA预测
model = ARIMA(monthly, order=(1, 1, 1))
model_fit = model.fit()
forecast = model_fit.forecast(steps=3)
print("未来3个月预测销量：\\n", forecast)

# 5. 评估
from sklearn.metrics import mean_absolute_error
predicted = model_fit.fittedvalues
mae = mean_absolute_error(monthly[1:], predicted[1:])
print(f"\\nMAE: {mae:.2f}")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>未做日期格式转换，无法进行重采样和时序分析</li>
                <li>移动平均窗口设置不合理（如窗口=1，无法体现趋势；窗口=12，过度平滑）</li>
                <li>盲目使用ARIMA模型，不分析数据的平稳性（导致预测结果偏差极大）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>时序分析代码文件（time_series_analysis.py）</li>
                <li>趋势图、周期热力图、预测结果图</li>
                <li>预测评估 + 库存建议（200字）</li>
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
            <p class="page-desc">统计 + 模型结合 · 识别"异常订单"和"异常用户"</p>

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag blue">3σ原则</span>
                    <span class="tag blue">箱线图</span>
                    <span class="tag blue">孤立森林</span>
                    <span class="tag blue">异常值解读</span>
                    <span class="tag blue">业务异常定位</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商订单异常检测，识别"异常订单"（如刷单、恶意下单、系统误录）、"异常用户"（如高频下单但不付款），降低业务风险。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1">读取模拟订单数据（order_data.csv），包含字段：订单ID、用户ID、订单金额、下单时间、支付状态、收货地址</li>
                <li data-step="2"><strong>统计异常检测</strong>：用3σ原则和箱线图，识别订单金额的异常值（如单笔订单金额远超均值10倍）</li>
                <li data-step="3"><strong>模型异常检测</strong>：用孤立森林算法，以"订单金额、下单频次、支付时长"为特征，识别异常订单</li>
                <li data-step="4"><strong>异常合并与解读</strong>：合并两种方法识别的异常订单，分析异常类型（如"高金额未支付订单""高频小额订单"）</li>
                <li data-step="5"><strong>业务处理</strong>：针对不同类型的异常，给出处理建议</li>
            </ol>

            <h2>参考代码</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - anomaly_detection.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.ensemble import IsolationForest

df = pd.read_csv("order_data.csv")

# 1. 3σ原则检测
mean_amt = df["订单金额"].mean()
std_amt = df["订单金额"].std()
sigma3_upper = mean_amt + 3 * std_amt
sigma3_lower = mean_amt - 3 * std_amt
sigma3_anomalies = df[(df["订单金额"] > sigma3_upper) | (df["订单金额"] < sigma3_lower)]

# 2. 箱线图检测
Q1 = df["订单金额"].quantile(0.25)
Q3 = df["订单金额"].quantile(0.75)
IQR = Q3 - Q1
box_upper = Q3 + 1.5 * IQR
box_lower = Q1 - 1.5 * IQR
box_anomalies = df[(df["订单金额"] > box_upper) | (df["订单金额"] < box_lower)]

# 3. 孤立森林检测
features = ["订单金额", "下单频次", "支付时长"]
X = df[features].fillna(0)
iso_forest = IsolationForest(n_estimators=100, contamination=0.05, random_state=42)
df["异常标签"] = iso_forest.fit_predict(X)
if_anomalies = df[df["异常标签"] == -1]

# 4. 合并异常
all_anomaly_ids = set(sigma3_anomalies["订单ID"]) | set(box_anomalies["订单ID"]) | set(if_anomalies["订单ID"])
print(f"统计方法检测到: {len(sigma3_anomalies)} 条")
print(f"箱线图检测到: {len(box_anomalies)} 条")
print(f"孤立森林检测到: {len(if_anomalies)} 条")
print(f"合并后异常订单: {len(all_anomaly_ids)} 条")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>将"正常极端值"当作异常值（如"高端商品订单金额高"，并非异常）</li>
                <li>只检测异常，不解读异常原因、不给出处理建议（无业务价值）</li>
                <li>孤立森林参数设置不合理（如n_estimators=10，导致异常检测准确率低）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>异常检测代码文件（anomaly_detection.py）</li>
                <li>异常订单统计表格、异常可视化图</li>
                <li>异常解读 + 处理建议（250字）</li>
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

            <div class="info-card blue">
                <div class="info-card-title blue">📚 核心知识点</div>
                <p>
                    <span class="tag purple">全流程整合</span>
                    <span class="tag blue">数据预处理</span>
                    <span class="tag blue">关联规则</span>
                    <span class="tag blue">聚类</span>
                    <span class="tag blue">回归</span>
                    <span class="tag blue">可视化</span>
                    <span class="tag green">分析报告</span>
                </p>
            </div>

            <div class="info-card green">
                <div class="info-card-title green">🏢 业务场景</div>
                <p>电商综合数据分析，解决"如何提升营收"的核心业务问题，输出完整的分析报告，可直接用于业务决策。</p>
            </div>

            <h2>详细任务要求</h2>

            <ol class="task-list">
                <li data-step="1"><strong>数据准备</strong>：整合前面所有项目的模拟数据（用户、商品、订单、销量、购物车数据），形成综合数据集</li>
                <li data-step="2"><strong>数据预处理</strong>：完成缺失值、异常值、特征处理，标准化数据，保存处理后的数据</li>
                <li data-step="3"><strong>核心分析</strong>：① 关联规则挖掘（商品组合）；② KMeans用户聚类+RFM分层；③ 随机森林回归（销量预测+特征重要性）；④ 时序趋势分析</li>
                <li data-step="4"><strong>可视化呈现</strong>：绘制至少5张核心图表（相关性热力图、聚类图、销量趋势图、特征重要性图、关联规则图）</li>
                <li data-step="5"><strong>结论与落地</strong>：① 总结核心发现（如"高价值用户主要集中在一线城市""广告费是影响销量的核心因子"）；② 给出3-5条可落地的业务策略</li>
                <li data-step="6"><strong>输出报告</strong>：整理成标准数据分析报告（包含数据概况、分析过程、核心结论、策略建议、附录代码）</li>
            </ol>

            <h2>参考代码框架</h2>

            <div class="code-block">
                <div class="code-header">
                    <span class="code-lang">🐍 Python - comprehensive_analysis.py</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        复制
                    </button>
                </div>
                <pre><code class="language-python">"""
全流程综合分析项目 - 完整分析师交付闭环
"""
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler

# ========== 第一步：数据整合与预处理 ==========
# 整合所有数据源
df_users = pd.read_csv("processed_data.csv")
df_goods = pd.read_csv("goods_data.csv")
df_orders = pd.read_csv("order_data.csv")
df_sales = pd.read_csv("sales_data.csv")
df_cart = pd.read_csv("cart_data.csv")

print("=" * 50)
print("数据概况")
print("=" * 50)
print(f"用户数据: {df_users.shape}")
print(f"商品数据: {df_goods.shape}")
print(f"订单数据: {df_orders.shape}")
print(f"销量数据: {df_sales.shape}")

# ========== 第二步：核心分析 ==========
# 2.1 相关性分析
# ...（参考项目2）

# 2.2 KMeans用户聚类 + RFM分层
# ...（参考项目4、5）

# 2.3 随机森林销量预测
# ...（参考项目7）

# 2.4 时序趋势分析
# ...（参考项目8）

# ========== 第三步：可视化 ==========
fig, axes = plt.subplots(2, 3, figsize=(18, 12))
# 绘制5+张核心图表...

# ========== 第四步：结论与策略 ==========
print("\\n" + "=" * 50)
print("核心结论")
print("=" * 50)
print("1. 高价值用户特征：...")
print("2. 影响销量的核心因子：...")
print("3. 商品关联组合：...")
print("\\n策略建议：")
print("1. 捆绑销售策略：...")
print("2. 精准投放策略：...")
print("3. 库存优化策略：...")</code></pre>
            </div>

            <h2>⚠️ 新手必踩坑</h2>
            <ul class="pitfall-list">
                <li>数据整合混乱（字段不匹配、数据格式不一致，导致分析无法进行）</li>
                <li>分析无重点（堆砌所有方法，未围绕"提升营收"的核心目标）</li>
                <li>报告逻辑混乱，无数据支撑结论（如"建议提升广告费"，但未给出广告费与销量的关联数据）</li>
            </ul>

            <h2>📦 最终交付物</h2>
            <ul class="deliverable-list">
                <li>全流程代码文件（comprehensive_analysis.py）</li>
                <li>所有核心可视化图表</li>
                <li>完整数据分析报告（800-1000字，含附录代码）</li>
            </ul>
        </div>
        `
    }
};

// 页面顺序（用于上一页/下一页导航）
const pageOrder = [
    'home',
    'mindset1', 'mindset2', 'mindset3', 'mindset4', 'mindset5',
    'debate1', 'debate2', 'debate3',
    'project1', 'project2', 'project3', 'project4', 'project5',
    'project6', 'project7', 'project8', 'project9', 'project10'
];
