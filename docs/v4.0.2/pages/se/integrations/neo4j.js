<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.57"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.56" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.40" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.33" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.33" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.33" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.23" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.5" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.72"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.8auK1.1.spl1" title="原文 : Neo4j is a graph database management system developed by Neo4j, Inc. It is an ACID-compliant transactional database with native graph storage and processing.">Neo4jは、Neo4j, Inc.によって開発されたグラフ・データベース管理システムです。ネイティブ・グラフ・ストレージおよび処理を行うACID準拠のトランザクション・データベースです。</span> <span class="merged" id="all.8auK1.1.spl2" title="原文 : Neo4j is available in a GPL3-licensed open-source “community edition”.">Neo4jは、GPL3-licensedオープン・ソースの"コミュニティ・エディション"で使用できます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.50"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3F4QEw.1" title="原文 : To enable Neo4j add the following dependency to your project’s pom.xml (see Managing Dependencies).">Neo4jを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-integrations-neo4j&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.QHNHo.1" title="原文 : Check Neo4j Metrics propagation and Neo4j Health Checks for additional dependencies for Neo4j Metrics and Health Checks integration."><em>Neo4j</em> <code>Metrics</code>および<code>Health Checks</code>統合の追加の依存関係については、<router-link @click.native="this.scrollFix('#_neo4j_metrics_propagation')" to="#_neo4j_metrics_propagation">「Neo4jメトリクス伝播」</router-link>および<router-link @click.native="this.scrollFix('#_neo4j_health_checks')" to="#_neo4j_health_checks">「Neo4jヘルス・チェック」</router-link>を確認してください。</span></p>
</div>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.50"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3bpnJM.spl1" title="原文 : The support for Neo4j is implemented in Neo4j driver level.">Neo4jのサポートは、Neo4jドライバ・レベルで実装されます。</span> <span class="merged" id="all.3bpnJM.spl2" title="原文 : Just add the dependency, add configuration in application.yaml file and Neo4j driver will be configured by Helidon and can be used with Neo4j support object.">依存関係を追加するだけで、<code>application.yaml</code>ファイルに構成を追加し、Neo4jドライバはHelidonによって構成され、<code>Neo4j</code>サポート・オブジェクトで使用できます。</span> </p>

<p><span class="merged" id="all.3ibQRV.1" title="原文 : First describe Neo4j connection properties:">最初に、Neo4j接続プロパティについて説明します:</span></p>

<markup
lang="properties"

>neo4j:
 uri: bolt://localhost:7687
 authentication:
   username: neo4j
   password: secret
 pool:
   metricsEnabled: true</markup>

<p><span class="merged" id="all.3ZDAyV" title="原文 : Then just get the driver:">次に、ドライバを取得します:</span></p>

<markup
lang="java"

>Neo4j neo4j = Neo4j.create(config.get("neo4j"));
Driver neo4jDriver = neo4j.driver();</markup>

<p><span class="merged" id="all.3vc0Xy.1" title="原文 : The driver can be used according to the Neo4j documentation.">ドライバは<a href="https://neo4j.com/developer/java/" target="_blank">「Neo4jドキュメント」</a>に従って使用できます。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.38"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.354gkb.1" title="原文 : Type: io.helidon.integrations.neo4j.Neo4j">タイプ: <a href="/apidocs/io.helidon.integrations.neo4j/io/helidon/integrations/neo4j/Neo4j.html" target="_blank">io.helidon.integrations.neo4j.Neo4j</a></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.131"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.124" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.143"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.138"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.143"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.149"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2qxCLQ.1"  title="原文: authentication-enabled"><code>authentication-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.218"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.112"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Tac6a.1"  title="原文:: Enable authentication.">認証の有効化</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3JcTSK.1"  title="原文: certificate"><code>certificate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.38biMr.3"  title="原文:: Path">パス</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3gPtUl.1" title="原文 : Set certificate path.">証明書のパスを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Qa5kT.1"  title="原文: connection-acquisition-timeout"><code>connection-acquisition-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.52"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.2mWW0Y.1"  title="原文: PT1MS"><code>PT1MS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZOd3P.1" title="原文 : Set connection acquisition timeout.">接続取得タイムアウトを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TXjt2.1"  title="原文: encrypted"><code>encrypted</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.219"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4T2Jrx.1" title="原文 : Enable encrypted field.">暗号化フィールドを有効にします。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2kqJW4.1"  title="原文: hostname-verification-enabled"><code>hostname-verification-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.220"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4O3qJ3.1" title="原文 : Enable hostname verification.">ホスト名の検証を有効にします。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4FAcSk.1"  title="原文: idle-time-before-connection-test"><code>idle-time-before-connection-test</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.53"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4QWX4U.1"  title="原文: PT-1MS"><code>PT-1MS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Pm6f4.1" title="原文 : Set idle time.">アイドル時間を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3YUpbm.1"  title="原文: log-leaked-sessions"><code>log-leaked-sessions</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.221"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.11ahNt.1" title="原文 : Enable log leaked sessions.">ログ・リーク・セッションを有効にします。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3v6m4b.1"  title="原文: max-connection-lifetime"><code>max-connection-lifetime</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.54"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4d1iFq.1"  title="原文: PT5H"><code>PT5H</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1z3MLg.1" title="原文 : Set max life time.">最大ライフ時間を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.RaFSy.1"  title="原文: max-connection-pool-size"><code>max-connection-pool-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.90"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.368nYW.2"  title="原文: 100"><code>100</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wkc9Q.1" title="原文 : Set pool size.">プール・サイズを設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Pwvoe.1"  title="原文: metrics-enabled"><code>metrics-enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.222"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3bJTCI.1" title="原文 : Enable metrics.">メトリクスの有効化。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xgZgv.5"  title="原文: password"><code>password</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.302"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3gHdSJ.1"  title="原文:: Create password.">パスワードの作成</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1W86Ak.1"  title="原文: trust-strategy"><code>trust-strategy</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.zUFLM.1" title="原文 : TrustStrategy (TRUST_ALL_CERTIFICATES, TRUST_CUSTOM_CA_SIGNED_CERTIFICATES, TRUST_SYSTEM_CA_SIGNED_CERTIFICATES)">TrustStrategy (TRUST_ALL_CERTIFICATES, TRUST_CUSTOM_CA_SIGNED_CERTIFICATES, TRUST_SYSTEM_CA_SIGNED_CERTIFICATES)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1lPXDv.1" title="原文 : Set trust strategy.">トラスト戦略を設定します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2QKN54.2"  title="原文: uri"><code>uri</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.303"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.18zW4T.1" title="原文 : Create uri.">URIを作成します。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2FqwBE.4"  title="原文: username"><code>username</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.304"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4PkXxz.1" title="原文 : Create username.">ユーザー名を作成します。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.35"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.10LNiV.1.spl1" title="原文 : This example implements a simple Neo4j REST service using MicroProfile.">この例では、MicroProfileを使用して単純なNeo4j RESTサービスを実装します。</span> <span class="merged" id="all.10LNiV.1.spl2" title="原文 : For this example a working Neo4j database is required.">この例では、作業中のNeo4jデータベースが必要です。</span> <span class="merged" id="all.10LNiV.1.spl3" title="原文 : The Neo4j Movie database is used for this example.">この例では、Neo4j Movieデータベースが使用されます。</span> </p>

<p><span class="merged" id="all.1ObbD4.1" title="原文 : Bring up a Neo4j instance via Docker">Dockerを介してNeo4jインスタンスを起動</span></p>

<markup
lang="bash"

>docker run --publish=7474:7474 --publish=7687:7687 -e 'NEO4J_AUTH=neo4j/secret'  neo4j:latest</markup>

<p><span class="merged" id="all.3Jpmss.1" title="原文 : Go to the Neo4j browser and play the first step of the movies graph: :play movies">Neo4jブラウザに移動し、ムービー・グラフの最初のステップを再生 : <a href="http://localhost:7474/browser/?cmd=play&amp;arg=movies" target="_blank"><code>:play movies</code></a></span></p>

<p><span class="merged" id="all.2WARha.1" title="原文 : Now go to the pom.xml and add the following dependencies:">次に、<code>pom.xml</code>に移動し、次の依存関係を追加します:</span></p>

<markup
lang="xml"

> &lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-neo4j&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-neo4j-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-neo4j-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2F94PL.1" title="原文 : Next add the connection configuration properties for Neo4j:">次に、Neo4jの接続構成プロパティを追加します:</span></p>

<markup
lang="properties"

>neo4j:
 uri: bolt://localhost:7687
 authentication:
   username: neo4j
   password: secret
 pool:
   metricsEnabled: true</markup>

<p><span class="merged" id="all.39jIOR.1" title="原文 : This includes both connection information and enables Neo4j metrics propagation.">これには接続情報の両方が含まれ、Neo4jメトリクスの伝播が有効になります。</span></p>

<p><span class="merged" id="all.14KDTy" title="原文 : Finally, we are able to use the Neo4j driver.">最後に、<code>Neo4j</code>ドライバを使用できます。</span></p>

<markup
lang="java"

>@ApplicationScoped
public class MovieRepository {

    private final Driver driver;

    public MovieRepository(Driver driver) { <span class="conum" data-value="1" />
        this.driver = driver;
    }

    public List&lt;Movie&gt; findAll() { <span class="conum" data-value="2" />

        try (var session = driver.session()) {

            var query = ""
                    + "match (m:Movie) "
                    + "match (m) &lt;- [:DIRECTED] - (d:Person) "
                    + "match (m) &lt;- [r:ACTED_IN] - (a:Person) "
                    + "return m, collect(d) as directors, collect({name:a.name, roles: r.roles}) as actors";

            return session.readTransaction(tx -&gt; tx.run(query).list(r -&gt; {
                var movieNode = r.get("m").asNode();

                var directors = r.get("directors").asList(v -&gt; {
                    var personNode = v.asNode();
                    return new Person(personNode.get("born").asInt(), personNode.get("name").asString());
                });

                var actors = r.get("actors").asList(v -&gt; {
                    return new Actor(v.get("name").asString(), v.get("roles").asList(Value::asString));
                });

                var m = new Movie(movieNode.get("title").asString(), movieNode.get("tagline").asString());
                m.setReleased(movieNode.get("released").asInt());
                m.setDirectorss(directors);
                m.setActors(actors);
                return m;
            }));
        }
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4eim4v" title="原文 : Constructor with Neo4j driver parameter"><code>Neo4j</code>ドライバ・パラメータを持つコンストラクタ</span></li>
<li data-value="2"><span class="merged" id="all.3s8udn" title="原文 : Use Neo4j driver to extract all Movies"><code>Neo4j</code>ドライバを使用してすべてのムービーを抽出</span></li>
</ul>

<p><span class="merged" id="all.4UdoJK.1" title="原文 : Movies can now be returned as JSON objects:">ムービーをJSONオブジェクトとして返すことができます:</span></p>

<markup
lang="java"

>public class MovieService implements HttpService {
    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public void routing(HttpRules rules) {
        rules.get("/api/movies", this::findMoviesHandler);
    }

    private void findMoviesHandler(ServerRequest request, ServerResponse response) {
        response.send(this.movieRepository.findAll());
    }
}</markup>

<p><span class="merged" id="all.2rN8UE" title="原文 : To use the service, as well as to add metrics and health support the following routing should be created:">サービスを使用し、メトリクスおよびヘルス・サポートを追加するには、次のルーティングを作成する必要があります:</span></p>

<markup
lang="java"

>private static Routing createRouting(Config config) {

        MetricsSupport metrics = MetricsSupport.create();

        Neo4j neo4j = Neo4j.create(config.get("neo4j")); <span class="conum" data-value="1" />

        // registers all metrics
        Neo4jMetricsSupport.builder() <span class="conum" data-value="2" />
                .driver(neo4j.driver())
                .build()
                .initialize();

        Neo4jHealthCheck healthCheck = Neo4jHealthCheck.create(neo4j.driver()); <span class="conum" data-value="3" />

        Driver neo4jDriver = neo4j.driver();

        MovieService movieService = new MovieService(new MovieRepository(neo4jDriver)); <span class="conum" data-value="4" />

        HealthSupport health = HealthSupport.builder()
                .add(HealthChecks.healthChecks())   // Adds a convenient set of checks
                .add(healthCheck)
                .build();

        return Routing.builder() <span class="conum" data-value="5" />
                .register(health)                   // Health at "/health"
                .register(metrics)                  // Metrics at "/metrics"
                .register(movieService)
                .build();
        }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4KNkIz" title="原文 : Use of Neo4j support object to initialise and configure the driver."><code>Neo4j</code>サポート・オブジェクトを使用して、ドライバを初期化および構成します。</span></li>
<li data-value="2"><span class="merged" id="all.3u3eho" title="原文 : Use of Neo4jMetricsSupport to add Neo4j metrics to /metrics output."><code>Neo4jMetricsSupport</code>を使用して、<em>Neo4j</em>メトリクスを<code>/metrics</code>出力に追加します。</span></li>
<li data-value="3"><span class="merged" id="all.1LcAUZ" title="原文 : Use of Neo4jHealthCheck to add Neo4j health support."><code>Neo4jHealthCheck</code>を使用して、<em>Neo4j</em>ヘルス・サポートを追加します。</span></li>
<li data-value="4"><span class="merged" id="all.3omBzV" title="原文 : Initialize MovieService with Neo4j driver."><em>Neo4j</em>ドライバを使用して<code>MovieService</code>を初期化します。</span></li>
<li data-value="5"><span class="merged" id="all.1RneD5" title="原文 : Register the services in Routing."><em>「ルーティング」</em>にサービスを登録します。</span></li>
</ul>

<p><span class="merged" id="all.17M3OQ.1" title="原文 : Now build and run with JDK17+">JDK17+を使用して構築および実行</span></p>

<markup
lang="bash"

>mvn package
java -jar target/helidon-examples-integration-neo4j-mp.jar</markup>

<p><span class="merged" id="all.34QYDs.1" title="原文 : Exercise the application:">アプリケーションを実行します:</span></p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/movies
{. . .}

# Try health and metrics
curl -s -X GET http://localhost:8080/health
{"outcome":"UP",...
. . .

# Prometheus Format
curl -s -X GET http://localhost:8080/metrics
# TYPE base:gc_g1_young_generation_count gauge
. . .

# JSON Format
curl -H 'Accept: application/json' -X GET http://localhost:8080/metrics
{"base":...
. . .</markup>

<p><span class="merged" id="all.2Y5BZB.1" title="原文 : Full example code is available in Helidon GitHub Repository.">完全なサンプル・コードは、<a href="https://github.com/oracle/helidon/tree/master/examples/integrations/neo4j/neo4j-mp" target="_blank">「Helidon GitHubリポジトリ」</a>で使用できます。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.25"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_neo4j_metrics_propagation"><span class="merged" id="all.kJqDX.1" title="原文 : Neo4j Metrics propagation">Neo4jメトリクス伝播</span></h3>
<div class="section">
<p><span class="merged" id="all.379w8l.spl1" title="原文 : Neo4j metrics can be propagated to the user as MicroProfile metrics.">Neo4jメトリクスは、<code>MicroProfile</code>メトリクスとしてユーザーに伝播できます。</span> <span class="merged" id="all.379w8l.spl2" title="原文 : This is implemented in a separate Maven module.">これは別のMavenモジュールに実装されています。</span> <span class="merged" id="all.379w8l.spl3" title="原文 : Just add:">単に追加:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-integrations-neo4j-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1qkwRF.2" title="原文 : Works with Neo4j Integration main dependency described in Maven Coordinates."><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">「Maven連携」</router-link>で説明されている<em>「Neo4j統合」</em>メイン依存関係で動作します。</span></p>
</div>

<p><span class="merged" id="all.1KYyk4" title="原文 : To enable metrics in Neo4j, add the following property to application.yaml:">Neo4jでメトリクスを有効にするには、次のプロパティを<code>application.yaml</code>に追加します:</span></p>

<markup
lang="yaml"

>pool:
   metricsEnabled: true</markup>

<p><span class="merged" id="all.uhEFU" title="原文 : Finally, to initialize metrics run:">最後に、メトリクスを初期化するには、次を実行します:</span></p>

<markup
lang="java"

>Neo4jMetricsSupport.builder()
        .driver(neo4j.driver())
        .build()
        .initialize();</markup>

<p><span class="merged" id="all.dEaPE" title="原文 : Neo4j metrics will be automatically added to the output of the /metrics endpoint.">Neo4jメトリクスは、<code>/metrics</code>エンドポイントの出力に自動的に追加されます。</span></p>

</div>


<h3 id="_neo4j_health_checks"><span class="merged" id="all.184iAl.1" title="原文 : Neo4j Health Checks">Neo4jヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.41Oqsj.1" title="原文 : If your application is highly dependent on Neo4j database, health and liveness checks are essential for this application to work correctly.">アプリケーションがNeo4jデータベースに大きく依存している場合は、このアプリケーションを正しく動作させるには、ヘルスとリブネス・チェックが不可欠です。</span></p>

<p><span class="merged" id="all.trjVt.1" title="原文 : MicroProfile Health checks for Neo4j are implemented in a separate Maven module:">Neo4jの<code>MicroProfile</code>ヘルス・チェックは、別のMavenモジュールに実装されます:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-integrations-neo4j-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1qkwRF.3" title="原文 : Works with Neo4j Integration main dependency described in Maven Coordinates."><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">「Maven連携」</router-link>で説明されている<em>「Neo4j統合」</em>メイン依存関係で動作します。</span></p>
</div>

<p><span class="merged" id="all.2usIfT" title="原文 : To enable health checks run the following code:">ヘルス・チェックを有効にするには、次のコードを実行します:</span></p>

<markup
lang="java"

>Neo4jHealthCheck healthCheck = Neo4jHealthCheck.create(neo4j.driver());

HealthSupport health = HealthSupport.builder()
        .add(healthCheck)
        .build();</markup>

<p><span class="merged" id="all.fvPSV.1" title="原文 : Health checks for Neo4j will be included in /health endpoint output.">Neo4jのヘルス・チェックは、<code>/health</code>エンドポイント出力に含まれます。</span></p>

</div>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.9"  title="原文:: References">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.29HeLs.1" title="原文 : Neo4j official website"><a href="https://neo4j.com/" target="_blank">Neo4j公式サイト</a></span></p>

</li>
<li>
<p><span class="merged" id="all.74zM1.1" title="原文 : Neo4j Java developer guide"><a href="https://neo4j.com/developer/java/" target="_blank">Neo4j Java開発者ガイド</a></span></p>

</li>
</ul>

</div>

</doc-view>
