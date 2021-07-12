<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.w8tHl" title="原文 : Using Configuration for CORS">CORSの構成の使用</span></dt>
<dd slot="desc"><p><span class="merged" id="all.8q3eW.spl1" title="原文 : You can use configuration in combination with the Helidon CORS SE API to add CORS support to your resources by replacing some Java code with declarative configuration.">Helidon CORS SE APIと組み合せて構成を使用すると、一部のJavaコードを宣言的な構成に置き換えることで、CORSサポートをリソースに追加できます。</span> <span class="merged" id="all.8q3eW.spl2" title="原文 : This also gives your users a way to override the CORS behavior of your services without requiring the code to change.">これにより、ユーザーはコードを変更せずにサービスのCORS動作をオーバーライドすることもできます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="cors-configuration-formats"><span class="merged" id="all.21V5hZ.1" title="原文 : Understanding the CORS Configuration Formats">CORS構成形式の理解</span></h2>
<div class="section">
<p><span class="merged" id="all.2fs7fZ.spl1" title="原文 : Support in Helidon for CORS configuration uses two closely-related cross-origin configuration formats: basic and mapped.">CORS構成に対するHelidonでのサポートでは、密接に関連する複数のクロス・オリジン構成形式が使用されます: basicおよびmapped。</span> <span class="merged" id="all.2fs7fZ.spl2" title="原文 : Each format corresponds to a class in the Helidon CORS library.">各形式は、Helidon CORSライブラリのクラスに対応します。</span> <span class="merged" id="all.2fs7fZ.spl3" title="原文 : The basic format corresponds to the CrossOriginConfig class, and the mapped format corresponds to the MappedCrossOriginConfig class.">基本フォーマットは<a href="./apidocs/io.helidon.webserver.cors/io/helidon/webserver/cors/CrossOriginConfig.html" id="" target="_blank" ><code>CrossOriginConfig</code></a>クラスに対応し、マップされたフォーマットは<a href="./apidocs/io.helidon.webserver.cors/io/helidon/webserver/cors/MappedCrossOriginConfig.html" id="" target="_blank" ><code>MappedCrossOriginConfig</code></a>クラスに対応します。</span> </p>


<h3 id="basic-cross-origin-config"><span class="merged" id="all.3rFINR.1" title="原文 : Basic Cross-Origin Configuration">基本的なクロス・オリジン構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2Moc3t.1.spl1" title="原文 : In configuration, Helidon represents basic CORS information as a section, identified by a configuration key of your choosing, that contains one or more key/value pairs.">構成では、Helidonは基本的なCORS情報を、選択した構成キーで識別されるセクションとして表します。このセクションには、1つ以上のキー/バリュー・ペアが含まれています。</span> <span class="merged" id="all.2Moc3t.1.spl2" title="原文 : Each key-value pair assigns one characteristic of CORS behavior.">各キーと値のペアにCORS動作の特性が1つ割り当てられます。</span> </p>

<p><span class="merged" id="all.1rCp5c" title="原文 : The table below lists the configuration keys that identify the CORS characteristics.">次の表に、CORS特性を識別する構成キーを示します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.1Ov129.5"  title="原文:: Configuration Key">構成キー</span></th>
<th><span class="merged" id="all.oxso7.3"  title="原文:: Default">デフォルト</span></th>
<th><span class="merged" id="all.3zyV5O.2" title="原文 : CORS Header Name">CORSヘッダー名</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1nJYnr.1"  title="原文: allow-credentials"><code>allow-credentials</code></span></td>
<td class=""><span class="merged" id="all.42DdBS.10"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4dF9U6.2"  title="原文: Access-Control-Allow-Credentials"><code>Access-Control-Allow-Credentials</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3CeDxm.1"  title="原文: allow-headers"><code>allow-headers</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.6"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.RsjK1.2"  title="原文: Access-Control-Allow-Headers"><code>Access-Control-Allow-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2GrPoY.1"  title="原文: allow-methods"><code>allow-methods</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.7"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.3hrvIH.2"  title="原文: Access-Control-Allow-Methods"><code>Access-Control-Allow-Methods</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3lELH6.1"  title="原文: allow-origins"><code>allow-origins</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.8"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.2FjaSx.2"  title="原文: Access-Control-Allow-Origins"><code>Access-Control-Allow-Origins</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uvwu1.1"  title="原文: expose-headers"><code>expose-headers</code></span></td>
<td class=""><span class="merged" id="all.2Qehz5.3"  title="原文: none"><code>none</code></span></td>
<td class=""><span class="merged" id="all.yr2OR.2"  title="原文: Access-Control-Expose-Headers"><code>Access-Control-Expose-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.znMla.1"  title="原文: max-age"><code>max-age</code></span></td>
<td class=""><span class="merged" id="all.3ukg0O.2"  title="原文: 3600"><code>3600</code></span></td>
<td class=""><span class="merged" id="all.4bPOg7.2"  title="原文: Access-Control-Max-Age"><code>Access-Control-Max-Age</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL.3"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.xEiHU.15"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2jtIAF.4"  title="原文:: n/a">該当なし</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.226CVy.2" title="原文 : If the cross-origin configuration is disabled (enabled = false), then the Helidon CORS implementation ignores the cross-origin configuration entry.">クロス・オリジン構成が無効になっている場合(<code>enabled</code> = false)、Helidon CORS実装はクロス・オリジン構成エントリを無視します。</span></p>

<p><span class="merged" id="all.6Jbzq" title="原文 : The following example of basic cross-origin configuration, when loaded and used by the application, limits cross-origin resource sharing for PUT and DELETE operations to only foo.com and there.com:">次の基本的なクロス・オリジン構成の例は、アプリケーションによってロードおよび使用される場合、<code>PUT</code>および<code>DELETE</code>操作のクロス・オリジン・リソース共有を<code>foo.com</code>および<code>there.com</code>のみに制限します:</span></p>

<markup
lang="hocon"

>...
restrictive-cors:
  allow-origins: ["http://foo.com", "http://there.com"]
  allow-methods: ["PUT", "DELETE"]
...</markup>

</div>

<h3 id="_mapped_cross_origin_configuration"><span class="merged" id="all.1OHJHp" title="原文 : Mapped Cross-Origin Configuration">マップされたクロス・オリジン構成</span></h3>
<div class="section">
<p><span class="merged" id="all.39vzR5.spl1" title="原文 : In some cases, you or your users might want to configure CORS behavior based on URL path matching.">場合によっては、URLパスの一致に基づいてCORSの動作を構成する必要があります。</span> <span class="merged" id="all.39vzR5.spl2" title="原文 : Helidon represents mapped CORS information as a section, identified by a configuration key of your choosing, that contains:">Helidonは、マップされたCORS情報を、選択した構成キーで識別されるセクションとして表します。このセクションには、次のものが含まれます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zgzb1.1" title="原文 : An optional enabled setting which defaults to true and applies to the whole mapped CORS config section, and"><code>true</code>にデフォルト設定され、マップされたCORS構成セクション全体に適用されるオプションの<code>enabled</code>設定</span></p>

</li>
<li>
<p><span class="merged" id="all.1dys2z.1" title="原文 : An optional paths subsection containing zero or more entries, each of which contains:">ゼロ個以上のエントリを含むオプションの<code>paths</code>サブセクション。各サブセクションには次のものが含まれます:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1XKhTK.1" title="原文 : a basic CORS config section, and">基本的なCORS構成セクション</span></p>

</li>
<li>
<p><span class="merged" id="all.1JNvMG.1" title="原文 : a path-pattern path pattern that maps that basic CORS config section to the resource(s) it affects.">その基本的なCORS構成セクションを影響を受けるリソースにマップする<code>path-pattern</code>パス・パターン。</span></p>

</li>
</ul>
</li>
</ul>
<p><span class="merged" id="all.kcifA.1" title="原文 : You can use mapped configuration to your advantage if you want to allow your users to override the CORS behavior set up in the application code.">アプリケーション・コードで設定されたCORS動作をユーザーがオーバーライドできるようにする場合は、マップされた構成を利用できます。</span></p>

<p><span class="merged" id="all.Z2DyD.1" title="原文 : The following example illustrates the mapped cross-origin configuration format.">次の例は、マップされたクロス・オリジン構成の形式を示しています。</span></p>

<markup
lang="hocon"

>...
my-cors: <span class="conum" data-value="1" />
  paths: <span class="conum" data-value="2" />
    - path-pattern: /greeting <span class="conum" data-value="3" />
      allow-origins: ["http://foo.com", "http://there.com", "http://other.com"] <span class="conum" data-value="4" />
      allow-methods: ["PUT", "DELETE"]
    - path-pattern: / <span class="conum" data-value="5" />
      allow-methods: ["GET", "HEAD", "OPTIONS", "POST"] <span class="conum" data-value="6" />
...</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.uej61" title="原文 : Assigns a unique identifier for this mapped CORS config section.">このマップされたCORS構成セクションに一意の識別子を割り当てます。</span></li>
<li data-value="2"><span class="merged" id="all.3hUVgb.1" title="原文 : Collects the sequence of entries, each of which maps a basic CORS config to a path pattern.">エントリのシーケンスを収集し、それぞれが基本CORS構成をパス・パターンにマップします。</span></li>
<li data-value="3"><span class="merged" id="all.36fbXU.1" title="原文 : Marks the beginning of an entry (the - character) and maps the associated basic CORS config to the /greeting subresource (the path-pattern key and value).">エントリの開始をマークし(<code>-</code>文字)、関連付けられた基本CORS構成を<code>/greeting</code>サブリソース(<code>path-pattern</code>キーおよび値)にマップします。</span></li>
<li data-value="4"><span class="merged" id="all.ovWjJ.1" title="原文 : Begins the basic CORS config section for /greeting; it restricts sharing via PUT and DELETE to the listed origins."><code>/greeting</code>の基本CORS構成セクションを開始し、<code>PUT</code>および<code>DELETE</code>を介した共有をリストされたオリジンに制限します。</span></li>
<li data-value="5"><span class="merged" id="all.CjGwV.1" title="原文 : Marks the beginning of the next entry (the - character) and maps the associated basic CORS config to the top-level resource in the app (the path-pattern key and value).">次のエントリの開始をマークし(<code>-</code>文字)、関連付けられた基本CORS構成をアプリケーションの最上位リソース(<code>path-pattern</code>キーおよび値)にマップします。</span></li>
<li data-value="6"><span class="merged" id="all.SxMBG.1" title="原文 : Begins the basic CORS config section for /; it permits sharing of resources at the top-level path with all origins for the indicated HTTP methods."><code>/</code>の基本CORS構成セクションを開始します。これにより、指定されたHTTPメソッドのすべてのオリジンと最上位パスのリソースを共有できます。</span></li>
</ul>
<p><span class="merged" id="all.2NJvkH.1" title="原文 : Path patterns can be any expression accepted by the PathMatcher class.">パス・パターンには、<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/PathMatcher.html" id="" target="_blank" ><code>PathMatcher</code></a>クラスで使用できる任意の式を指定できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3gE4C2.1.spl1" title="原文 : Be sure to arrange the entries in the order that you want Helidon to check them.">Helidonでチェックする順序にエントリを配置してください。</span> <span class="merged" id="all.3gE4C2.1.spl2" title="原文 : Helidon CORS support searches the cross-origin entries in the order you define them until it finds an entry that matches an incoming request&rsquo;s path pattern and HTTP method.">Helidon CORSサポートは、受信リクエストのパス・パターンおよびHTTPメソッドに一致するエントリが見つかるまで、定義した順序でクロス・オリジン・エントリを検索します。</span> </p>
</div>
</div>
</div>

<h2 id="using-config-from-app"><span class="merged" id="all.38LxXX" title="原文 : Using CORS Configuration in the Application">アプリケーションでのCORS構成の使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2eSB6y.spl1" title="原文 : You use configuration in combination with the Helidon CORS SE API to add CORS support to your resources.">Helidon CORS SE APIと組み合せて構成を使用して、CORSサポートをリソースに追加します。</span> <span class="merged" id="all.2eSB6y.spl2" title="原文 : The example in Sample Routing Setup Using the CrossOriginConfig API uses the low-level Helidon CORS SE API to create a CrossOriginConfig instance that is then used as part of a CorsSupport instance to create the routing rules."><router-link :to="{path: '/se/cors/02_using-the-api', hash: '#se-api-routing-example'}">「<code>CrossOriginConfig</code> APIを使用したルーティング設定の例」</router-link>の例では、低レベルのHelidon CORS SE APIを使用して<code>CrossOriginConfig</code>インスタンスを作成し、これを<code>CorsSupport</code>インスタンスの一部として使用してルーティング・ルールを作成します。</span> <span class="merged" id="all.2eSB6y.spl3" title="原文 : As an alternative to using the low-level API, this example uses config to create the CrossOriginConfig instance instead.">この例では、低レベルAPIを使用するかわりに、configを使用して<code>CrossOriginConfig</code>インスタンスを作成します。</span> </p>

<markup
lang="java"

>    private static Routing createRouting(Config config) {

        MetricsSupport metrics = MetricsSupport.create();
        GreetService greetService = new GreetService(config);
        HealthSupport health = HealthSupport.builder()
                .addLiveness(HealthChecks.healthChecks())   // Adds a convenient set of checks
                .build();
        CorsSupport.Builder builder = CorsSupport.builder();

        Config config = Config.create(); // Created from the current config sources
        config.get("my-cors") <span class="conum" data-value="1" />
                .ifExists(builder::mappedConfig);
        config.get("restrictive-cors") <span class="conum" data-value="2" />
                .ifExists(builder::config);
        builder.addCrossOriginConfig(CrossOriginConfig.create()); <span class="conum" data-value="3" />

        CorsSupport corsSupport = builder.build(); <span class="conum" data-value="4" />

        // Note: Add the CORS routing *before* registering the GreetService routing.
        return Routing.builder()
                .register(JsonSupport.create())
                .register(health)                   // Health at "/health"
                .register(metrics)                 // Metrics at "/metrics"
                .register("/greet", corsSupport, greetService) <span class="conum" data-value="5" />
                .build();
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1MD8Ll" title="原文 : If my-cors exists in the configuration, use it to add mapped CORS config to the CorsSupport builder."><code>my-cors</code>が構成に存在する場合は、それを使用してマップされたCORS構成を<code>CorsSupport</code>ビルダーに追加します。</span></li>
<li data-value="2"><span class="merged" id="all.3olcBe" title="原文 : If restrictive-cors exists in the configuration, use it to add basic (not mapped) config to the builder."><code>restrictive-cors</code>が構成に存在する場合は、それを使用して基本的な(マップされていない)構成をビルダーに追加します。</span></li>
<li data-value="3"><span class="merged" id="all.3ywCDV" title="原文 : Provide default CORS handling for requests that do not match earlier entries.">以前のエントリと一致しないリクエストにデフォルトのCORS処理を指定します。</span></li>
<li data-value="4"><span class="merged" id="all.32e2y5" title="原文 : Obtain the finished CorsSupport instance.">終了した<code>CorsSupport</code>インスタンスを取得します。</span></li>
<li data-value="5"><span class="merged" id="all.3buqo9" title="原文 : Use corsSupport in constructing the routing rules."><code>corsSupport</code>を使用してルーティング・ルールを作成します。</span></li>
</ul>
<p><span class="merged" id="all.4XKlxT.spl1" title="原文 : As each request arrives, Helidon checks it against the cross-origin config instances in the order that your application added them to the CorsSupport.Builder.">リクエストが到着するたびに、Helidonは、アプリケーションが<code>CorsSupport.Builder</code>に追加した順序で、リクエストをクロス・オリジン構成インスタンスと照合します。</span> <span class="merged" id="all.4XKlxT.spl2" title="原文 : The my-cors mapped configuration acts as an override because the application added it to the builder first."><code>my-cors</code>マップ済構成は、アプリケーションによって最初にビルダーに追加されたため、オーバーライドとして機能します。</span> </p>

<p><span class="merged" id="all.nYuPx.spl1" title="原文 : If the my-cors config key does not appear in the configuration, then the code skips creating a CrossOriginConfig instance based on that configuration, and no overriding occurs."><code>my-cors</code>構成キーが構成に表示されない場合、コードはその構成に基づいた<code>CrossOriginConfig</code>インスタンスの作成をスキップし、オーバーライドは行われません。</span> <span class="merged" id="all.nYuPx.spl2" title="原文 : The CORS behavior that is established by the other CrossOriginConfig instance based on the restrictive-cors config (if present) prevails."><code>restrictive-cors</code>構成(存在する場合)に基づいて他の<code>CrossOriginConfig</code>インスタンスによって確立されるCORSの動作が優先されます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.mt35Y.1" title="原文 : Remember that if you set configuration in a file that you include as part of your application JAR file, then you need to rebuild and restart your application for any changes to take effect.">アプリケーションJARファイルの一部として含めるファイルに構成を設定した場合、変更を有効にするには、アプリケーションを再ビルドして再起動する必要があります。</span></p>
</div>
</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.11"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.9rAHU.spl1" title="原文 : Use these same configuration techniques to control the behavior of the CORS-enabled built-in services.">これらと同じ構成手法を使用して、CORS対応の組込みサービスの動作を制御します。</span> <span class="merged" id="all.9rAHU.spl2" title="原文 : Learn more."><router-link to="/se/cors/04_support-in-builtin-services">さらに学習します。</router-link></span> </p>

</li>
<li>
<p><span class="merged" id="all.2GHazE.1" title="原文 : See the Helidon CORS support in action by building and running the CORS example."><a href="https://github.com/oracle/helidon/tree/2.3.1/examples/cors" id="" target="_blank" >「CORSの例」</a>をビルドして実行し、動作中のHelidon CORSサポートを参照してください。</span></p>

</li>
</ul>
</div>
</doc-view>
