<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.12"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.10" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.9" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.7" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.9" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.8" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.4" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1eCH3t.2" title="原文 : References"><router-link @click.native="this.scrollFix('#_references')" to="#_references">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.10"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.8auK1.spl1" title="原文 : Neo4j is a graph database management system developed by Neo4j, Inc. It is an ACID-compliant transactional database with native graph storage and processing.">Neo4jは、Neo4j, Inc.によって開発されたグラフ・データベース管理システムです。ネイティブ・グラフ・ストレージおよび処理を行うACID準拠のトランザクション・データベースです。</span> <span class="merged" id="all.8auK1.spl2" title="原文 : Neo4j is available in a GPL3-licensed open-source &ldquo;community edition&rdquo;.">Neo4jは、GPL3-licensedオープン・ソースの"コミュニティ・エディション"で使用できます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.10"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3F4QEw" title="原文 : To enable Neo4j add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Neo4jを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-integrations-neo4j&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.QHNHo" title="原文 : Check Neo4j Metrics propagation and Neo4j Health Checks for additional dependencies for Neo4j Metrics and Health Checks integration."><em>Neo4j</em> <code>Metrics</code>および<code>Health Checks</code>統合の追加の依存関係については、<router-link @click.native="this.scrollFix('#_neo4j_metrics_propagation')" to="#_neo4j_metrics_propagation">「Neo4jメトリクス伝播」</router-link>および<router-link @click.native="this.scrollFix('#_neo4j_health_checks')" to="#_neo4j_health_checks">「Neo4jヘルス・チェック」</router-link>を確認してください。</span></p>
</div>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.7"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<p><span class="merged" id="all.4GLVEb.spl1" title="原文 : The support for Neo4j is implemented in Neo4j driver level.">Neo4jのサポートは、Neo4jドライバ・レベルで実装されます。</span> <span class="merged" id="all.4GLVEb.spl2" title="原文 : Just add the dependency, add configuration in microprofile-config.properties file and Neo4j driver will be configured by Helidon and can be injected using CDI.">依存関係を追加するだけで、<code>microprofile-config.properties</code>ファイルに構成を追加し、Neo4jドライバはHelidonによって構成され、CDIを使用してインジェクトできます。</span> </p>

<p><span class="merged" id="all.TVjiq" title="原文 : To implement Neo4j, you must first provide the connection properties as shown below:">Neo4jを実装するには、次に示すように、まず接続プロパティを指定する必要があります:</span></p>

<markup
lang="properties"

># Neo4j settings
neo4j.uri=bolt://localhost:7687
neo4j.authentication.username=neo4j
neo4j.authentication.password: secret
neo4j.pool.metricsEnabled: true</markup>

<p><span class="merged" id="all.3Eaypz" title="原文 : Then just inject the driver:">次に、ドライバをインジェクトします:</span></p>

<markup
lang="java"

>@Inject
public MovieRepository(Driver driver) {
   this.driver = driver;
}</markup>

<p><span class="merged" id="all.3vc0Xy" title="原文 : The driver can be used according to the Neo4j documentation.">ドライバは<a href="https://neo4j.com/developer/java/" target="_blank">「Neo4jドキュメント」</a>に従って使用できます。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.10"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1b5TJL.2" title="原文 : MicroProfile configuration options:">MicroProfile構成オプション:</span></p>


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
<th><span class="merged" id="all.2XKMH3.83"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.81"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.83"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.84"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4a3VL7.2"  title="原文: mp.jwt.verify.publickey"><code>mp.jwt.verify.publickey</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.186"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.DDbiB.2" title="原文 : The property allows the Public Verification Key text itself to be supplied as a string.">このプロパティを使用すると、パブリック検証キーのテキスト自体を文字列として指定できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WXssY.1"  title="原文: authentication.username"><code>authentication.username</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.187"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2A8v34.1" title="原文 : Neo4j authentication user name">Neo4j認証ユーザー名</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.WtOtD.1"  title="原文: authentication.password"><code>authentication.password</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.188"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4Ga1DY.1" title="原文 : Neo4j authentication password">Neo4j認証パスワード</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2XPsCf.1"  title="原文: authentication.enabled"><code>authentication.enabled</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.108"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.3ixKUT.1"  title="原文:: TRUE">TRUE</span></td>
<td class=""><span class="merged" id="all.4FEXtF.1" title="原文 : If Neo4j authentication is enabled">Neo4j認証が有効な場合</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1TXjt2.1"  title="原文: encrypted"><code>encrypted</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.109"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42TGIi.3"  title="原文:: FALSE">FALSE</span></td>
<td class=""><span class="merged" id="all.xu2eO.1" title="原文 : If Neo4j encryption is enabled">Neo4j暗号化が有効な場合</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3JhEzm.1"  title="原文: pool.metricsEnabled"><code>pool.metricsEnabled</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.110"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42TGIi.4"  title="原文:: FALSE">FALSE</span></td>
<td class=""><span class="merged" id="all.3U5KeF.1" title="原文 : If Neo4J metrics is enabled">Neo4Jメトリクスが有効な場合</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Pp3Sd.1"  title="原文: pool.logLeakedSessions"><code>pool.logLeakedSessions</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.111"  title="原文:: boolean">boolean</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.8iRXq.1" title="原文 : Log leaking sessions">ログ漏洩セッション</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1awMji.1"  title="原文: pool.maxConnectionPoolSize"><code>pool.maxConnectionPoolSize</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.189"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.EXCjv.1"  title="原文:: Maximum connection pool size">最大接続プール・サイズ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.IFbRP.1"  title="原文: pool.idleTimeBeforeConnectionTest"><code>pool.idleTimeBeforeConnectionTest</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.190"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2zLhru.1" title="原文 : Idle time before connection test">接続テスト前のアイドル時間</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ruIFO.1"  title="原文: pool.maxConnectionLifetime"><code>pool.maxConnectionLifetime</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.191"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.20YsNB.1" title="原文 : Connection lifetime in seconds">接続存続期間(秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.fdY3y.1"  title="原文: pool.connectionAcquisitionTimeout"><code>pool.connectionAcquisitionTimeout</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.192"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.gkVi9.1" title="原文 : Connection Acquisition Timeout">接続取得タイムアウト</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4W99aG.1"  title="原文: trustsettings.trustStrategy"><code>trustsettings.trustStrategy</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.193"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1Ia346.1" title="原文 : Trust Strategy: Trust All certificates, TRUST_ALL_CERTIFICATES, Trust custom certificates - TRUST_CUSTOM_CA_SIGNED_CERTIFICATES, Trust system CA - TRUST_SYSTEM_CA_SIGNED_CERTIFICATES">トラスト戦略: すべての証明書をトラストする、<code>TRUST_ALL_CERTIFICATES</code>、カスタム証明書をトラスト - <code>TRUST_CUSTOM_CA_SIGNED_CERTIFICATES</code>、トラスト・システムCA - <code>TRUST_SYSTEM_CA_SIGNED_CERTIFICATES</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zNSlL.1"  title="原文: trustsettings.certificate"><code>trustsettings.certificate</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.194"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1NJNei.1" title="原文 : Path to trusted certificate">トラストできる証明書へのパス</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.38j2vD.1"  title="原文: trustsettings.hostnameVerificationEnabled"><code>trustsettings.hostnameVerificationEnabled</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.195"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.42TGIi.5"  title="原文:: FALSE">FALSE</span></td>
<td class=""><span class="merged" id="all.1leFNQ.1" title="原文 : If hostname verification is enabled.">ホスト名検証が有効な場合。</span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.8"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.10LNiV.spl1" title="原文 : This example implements a simple Neo4j REST service using MicroProfile.">この例では、MicroProfileを使用して単純なNeo4j RESTサービスを実装します。</span> <span class="merged" id="all.10LNiV.spl2" title="原文 : For this example a working Neo4j database is required.">この例では、作業中のNeo4jデータベースが必要です。</span> <span class="merged" id="all.10LNiV.spl3" title="原文 : The Neo4j Movie database is used for this example.">この例では、Neo4j Movieデータベースが使用されます。</span> </p>

<p><span class="merged" id="all.1ObbD4" title="原文 : Bring up a Neo4j instance via Docker">Dockerを介してNeo4jインスタンスを起動</span></p>

<markup
lang="bash"

>docker run --publish=7474:7474 --publish=7687:7687 -e 'NEO4J_AUTH=neo4j/secret'  neo4j:latest</markup>

<p><span class="merged" id="all.3Jpmss" title="原文 : Go to the Neo4j browser and play the first step of the movies graph: :play movies">Neo4jブラウザに移動し、ムービー・グラフの最初のステップを再生 : <a href="http://localhost:7474/browser/?cmd=play&amp;arg=movies" target="_blank"><code>:play movies</code></a></span></p>

<p><span class="merged" id="all.2WARha" title="原文 : Now go to the pom.xml and add the following dependencies:">次に、<code>pom.xml</code>に移動し、次の依存関係を追加します:</span></p>

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

<p><span class="merged" id="all.2F94PL" title="原文 : Next add the connection configuration properties for Neo4j:">次に、Neo4jの接続構成プロパティを追加します:</span></p>

<markup
lang="properties"

># Neo4j settings
neo4j.uri=bolt://localhost:7687
neo4j.authentication.username=neo4j
neo4j.authentication.password: secret
neo4j.pool.metricsEnabled: true

# Enable the optional MicroProfile Metrics REST.request metrics
metrics.rest-request.enabled=true</markup>

<p><span class="merged" id="all.39jIOR" title="原文 : This includes both connection information and enables Neo4j metrics propagation.">これには接続情報の両方が含まれ、Neo4jメトリクスの伝播が有効になります。</span></p>

<p><span class="merged" id="all.e5VoH" title="原文 : Finally, we are able to inject and use the Neo4j driver.">最後に、<code>Neo4j</code>ドライバをインジェクトして使用できます。</span></p>

<markup
lang="java"

>@ApplicationScoped
public class MovieRepository {

    private final Driver driver;

    @Inject
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
<li data-value="1"><span class="merged" id="all.47F1W" title="原文 : Neo4j driver constructor injection"><code>Neo4j</code>ドライバ・コンストラクタ・インジェクション</span></li>
<li data-value="2"><span class="merged" id="all.121QqT" title="原文 : Use of Neo4j driver to extract all Movies"><code>Neo4j</code>ドライバを使用してすべてのムービーを抽出</span></li>
</ul>

<p><span class="merged" id="all.4UdoJK" title="原文 : Movies can now be returned as JSON objects:">映画をJSONオブジェクトとして返すことができます:</span></p>

<markup
lang="java"

>@GET
@Produces(MediaType.APPLICATION_JSON)
public List&lt;Movie&gt; getAllMovies() {
    return movieRepository.findAll();
}</markup>

<p><span class="merged" id="all.17M3OQ" title="原文 : Now build and run with JDK17+">JDK17+を使用して構築および実行</span></p>

<markup
lang="bash"

>mvn package
java -jar target/helidon-examples-integration-neo4j-mp.jar</markup>

<p><span class="merged" id="all.34QYDs" title="原文 : Exercise the application:">アプリケーションを実行します:</span></p>

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

<p><span class="merged" id="all.2Y5BZB" title="原文 : Full example code is available in Helidon GitHub Repository.">完全なサンプル・コードは、<a href="https://github.com/oracle/helidon/tree/master/examples/integrations/neo4j/neo4j-mp" target="_blank">「Helidon GitHubリポジトリ」</a>で使用できます。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.5"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

<h3 id="_neo4j_metrics_propagation"><span class="merged" id="all.kJqDX" title="原文 : Neo4j Metrics propagation">Neo4jメトリクス伝播</span></h3>
<div class="section">
<p><span class="merged" id="all.U5zmc.spl1" title="原文 : Neo4j metrics can be propagated to the user as MicroProfile metrics.">Neo4jメトリクスは、<code>MicroProfile</code>メトリクスとしてユーザーに伝播できます。</span> <span class="merged" id="all.U5zmc.spl2" title="原文 : This is implemented in a separate Maven module.">これは別のMavenモジュールに実装されています。</span> <span class="merged" id="all.U5zmc.spl3" title="原文 : Just add">追加</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-integrations-neo4j-metrics&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1qkwRF" title="原文 : Works with Neo4j Integration main dependency described in Maven Coordinates."><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">「Maven連携」</router-link>で説明されている<em>「Neo4j統合」</em>メイン依存関係で動作します。</span></p>
</div>

<p><span class="merged" id="all.2TP4O4" title="原文 : To enable metrics in Neo4j, add the following property to microprofile-config.properties:">Neo4jでメトリクスを有効にするには、次のプロパティを<code>microprofile-config.properties</code>に追加します:</span></p>

<markup
lang="properties"

>neo4j.pool.metricsEnabled=true</markup>

<p><span class="merged" id="all.mZQw0" title="原文 : By applying these two actions, Neo4j metrics will be automatically added to the output of the /metrics endpoint.">これら2つのアクションを適用すると、Neo4jメトリクスが<code>/metrics</code>エンドポイントの出力に自動的に追加されます。</span></p>

</div>


<h3 id="_neo4j_health_checks"><span class="merged" id="all.184iAl" title="原文 : Neo4j Health Checks">Neo4jヘルス・チェック</span></h3>
<div class="section">
<p><span class="merged" id="all.41Oqsj" title="原文 : If your application is highly dependent on Neo4j database, health and liveness checks are essential for this application to work correctly.">アプリケーションがNeo4jデータベースに大きく依存している場合は、このアプリケーションを正しく動作させるには、ヘルスとリブネス・チェックが不可欠です。</span></p>

<p><span class="merged" id="all.trjVt" title="原文 : MicroProfile Health checks for Neo4j are implemented in a separate Maven module:">Neo4jの<code>MicroProfile</code>ヘルス・チェックは、別のMavenモジュールに実装されます:</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
   &lt;groupId&gt;io.helidon.integrations.neo4j&lt;/groupId&gt;
   &lt;artifactId&gt;helidon-integrations-neo4j-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1qkwRF.1" title="原文 : Works with Neo4j Integration main dependency described in Maven Coordinates."><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">「Maven連携」</router-link>で説明されている<em>「Neo4j統合」</em>メイン依存関係で動作します。</span></p>
</div>

<p><span class="merged" id="all.fvPSV" title="原文 : Health checks for Neo4j will be included in /health endpoint output.">Neo4jのヘルス・チェックは、<code>/health</code>エンドポイント出力に含まれます。</span></p>

</div>

</div>


<h2 id="_references"><span class="merged" id="all.3oSja0.4"  title="原文:: References">参照</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.29HeLs" title="原文 : Neo4j official website"><a href="https://neo4j.com/" target="_blank">Neo4j公式サイト</a></span></p>

</li>
<li>
<p><span class="merged" id="all.74zM1" title="原文 : Neo4j Java developer guide"><a href="https://neo4j.com/developer/java/" target="_blank">Neo4j Java開発者ガイド</a></span></p>

</li>
</ul>

</div>

</doc-view>
