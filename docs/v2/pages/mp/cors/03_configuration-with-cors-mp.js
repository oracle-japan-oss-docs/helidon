<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.36EG6Z" title="原文 : Using Configuration with CORS in Helidon MP">Helidon MPでのCORSによる構成の使用</span></dt>
<dd slot="desc"><p><span class="merged" id="all.38Xkfv.spl1" title="原文 : Your application code establishes the CORS behavior of your endpoints using the @CrossOrigin annotation.">アプリケーション・コードは、<code>@CrossOrigin</code>注釈を使用してエンドポイントのCORS動作を確立します。</span> <span class="merged" id="all.38Xkfv.spl2" title="原文 : You and your users can override that behavior, as well as the CORS behavior of the built-in services, using MicroProfile configuration.">ユーザーは、MicroProfile構成を使用して、その動作および組込みサービスのCORS動作をオーバーライドできます。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="cors-configuration-formats"><span class="merged" id="all.21V5hZ" title="原文 : Understanding the CORS Configuration Formats">CORS構成形式の理解</span></h2>
<div class="section">
<p><span class="merged" id="all.1yk25.spl1" title="原文 : Support in Helidon for CORS configuration uses two closely-related cross-origin configuration formats: basic and mapped.">CORS構成に対するHelidonでのサポートでは、密接に関連する複数のクロス・オリジン構成形式が使用されます: basicおよびmapped。</span> <span class="merged" id="all.1yk25.spl2" title="原文 : Each format corresponds to a class in the Helidon CORS library.">各形式は、Helidon CORSライブラリのクラスに対応します。</span> <span class="merged" id="all.1yk25.spl3" title="原文 : The basic format corresponds to the CrossOriginConfig class, and the mapped format corresponds to the MappedCrossOriginConfig class.">基本フォーマットは<a href="./apidocs/io.helidon.microprofile.cors/io/helidon/microprofile/cors/CrossOriginConfig.html" id="" target="_blank" ><code>CrossOriginConfig</code></a>クラスに対応し、マップされたフォーマットは<a href="./apidocs/io.helidon.microprofile.cors/io/helidon/microprofile/cors/MappedCrossOriginConfig.html" id="" target="_blank" ><code>MappedCrossOriginConfig</code></a>クラスに対応します。</span> </p>


<h3 id="basic-cross-origin-config"><span class="merged" id="all.3rFINR" title="原文 : Basic Cross-Origin Configuration">基本的なクロス・オリジン構成</span></h3>
<div class="section">
<p><span class="merged" id="all.2Moc3t.spl1" title="原文 : In configuration, Helidon represents basic CORS information as a section, identified by a configuration key of your choosing, that contains one or more key/value pairs.">構成では、Helidonは基本的なCORS情報を、選択した構成キーで識別されるセクションとして表します。このセクションには、1つ以上のキー/バリュー・ペアが含まれています。</span> <span class="merged" id="all.2Moc3t.spl2" title="原文 : Each key-value pair assigns one characteristic of CORS behavior.">各キーと値のペアにCORS動作の特性が1つ割り当てられます。</span> </p>

<p><span class="merged" id="all.4N2uKi" title="原文 : The table below lists the parameters for the @CrossOriginConfig annotation and the configuration keys that identify the CORS characteristics.">次の表に、<code>@CrossOriginConfig</code>注釈のパラメータとCORS特性を識別する構成キーを示します。</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 25%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.11zQw6" title="原文 : Annotation Parameter">注釈パラメータ</span></th>
<th><span class="merged" id="all.1Ov129"  title="原文:: Configuration Key">構成キー</span></th>
<th><span class="merged" id="all.oxso7"  title="原文:: Default">デフォルト</span></th>
<th><span class="merged" id="all.3zyV5O" title="原文 : CORS Header Name">CORSヘッダー名</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.302KZl"  title="原文: allowCredentials"><code>allowCredentials</code></span></td>
<td class=""><span class="merged" id="all.1nJYnr"  title="原文: allow-credentials"><code>allow-credentials</code></span></td>
<td class=""><span class="merged" id="all.42DdBS"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4dF9U6"  title="原文: Access-Control-Allow-Credentials"><code>Access-Control-Allow-Credentials</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Tx1Wg"  title="原文: allowHeaders"><code>allowHeaders</code></span></td>
<td class=""><span class="merged" id="all.3CeDxm"  title="原文: allow-headers"><code>allow-headers</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.RsjK1"  title="原文: Access-Control-Allow-Headers"><code>Access-Control-Allow-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.hODrO"  title="原文: allowMethods"><code>allowMethods</code></span></td>
<td class=""><span class="merged" id="all.2GrPoY"  title="原文: allow-methods"><code>allow-methods</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.1"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.3hrvIH"  title="原文: Access-Control-Allow-Methods"><code>Access-Control-Allow-Methods</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2loTdg"  title="原文: allowOrigins"><code>allowOrigins</code></span></td>
<td class=""><span class="merged" id="all.3lELH6"  title="原文: allow-origins"><code>allow-origins</code></span></td>
<td class=""><span class="merged" id="all.3P5UfM.2"  title="原文: [&quot;*&quot;]"><code>["*"]</code></span></td>
<td class=""><span class="merged" id="all.2FjaSx"  title="原文: Access-Control-Allow-Origins"><code>Access-Control-Allow-Origins</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xOOIS"  title="原文: exposeHeaders"><code>exposeHeaders</code></span></td>
<td class=""><span class="merged" id="all.2uvwu1"  title="原文: expose-headers"><code>expose-headers</code></span></td>
<td class=""><span class="merged" id="all.2Qehz5"  title="原文: none"><code>none</code></span></td>
<td class=""><span class="merged" id="all.yr2OR"  title="原文: Access-Control-Expose-Headers"><code>Access-Control-Expose-Headers</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4OUtEo"  title="原文: maxAgeSeconds"><code>maxAgeSeconds</code></span></td>
<td class=""><span class="merged" id="all.znMla"  title="原文: max-age"><code>max-age</code></span></td>
<td class=""><span class="merged" id="all.3ukg0O"  title="原文: 3600"><code>3600</code></span></td>
<td class=""><span class="merged" id="all.4bPOg7"  title="原文: Access-Control-Max-Age"><code>Access-Control-Max-Age</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.48UcwL.1"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><span class="merged" id="all.xEiHU"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.2jtIAF"  title="原文:: n/a">該当なし</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.226CVy" title="原文 : If the cross-origin configuration is disabled (enabled = false), then the Helidon CORS implementation ignores the cross-origin configuration entry.">クロス・オリジン構成が無効になっている場合(<code>enabled</code> = false)、Helidon CORS実装はクロス・オリジン構成エントリを無視します。</span></p>

<p><span class="merged" id="all.437duk" title="原文 : The following example of basic cross-origin configuration limits cross-origin resource sharing for PUT and DELETE operations to only foo.com and there.com:">次の基本的なクロス・オリジン構成の例では、<code>PUT</code>および<code>DELETE</code>操作のクロス・オリジン・リソース共有を<code>foo.com</code>および<code>there.com</code>のみに制限します:</span></p>

<markup
lang="hocon"

>...
  allow-origins: ["http://foo.com", "http://there.com"]
  allow-methods: ["PUT", "DELETE"]
...</markup>

</div>

<h3 id="_understanding_the_mapped_cross_origin_configuration_format"><span class="merged" id="all.1jYlGi" title="原文 : Understanding the Mapped Cross-Origin Configuration Format">マップされたクロス・オリジン構成形式の理解</span></h3>
<div class="section">
<p><span class="merged" id="all.1mZtRX" title="原文 : In Helidon MP, you use the mapped cross-origin configuration format.">Helidon MPでは、マップされたクロス・オリジン構成形式を使用します。</span></p>

<p><span class="merged" id="all.22fBvc" title="原文 : Helidon represents mapped CORS information as a section, identified by a configuration key of your choosing, that contains:">Helidonは、マップされたCORS情報を、選択した構成キーで識別されるセクションとして表します。このセクションには、次のものが含まれます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1zgzb1" title="原文 : An optional enabled setting which defaults to true and applies to the whole mapped CORS config section, and"><code>true</code>にデフォルト設定され、マップされたCORS構成セクション全体に適用されるオプションの<code>enabled</code>設定</span></p>

</li>
<li>
<p><span class="merged" id="all.1dys2z" title="原文 : An optional paths subsection containing zero or more entries, each of which contains:">ゼロ個以上のエントリを含むオプションの<code>paths</code>サブセクション。各サブセクションには次のものが含まれます:</span></p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.1XKhTK" title="原文 : a basic CORS config section, and">基本的なCORS構成セクション</span></p>

</li>
<li>
<p><span class="merged" id="all.1JNvMG" title="原文 : a path-pattern path pattern that maps that basic CORS config section to the resource(s) it affects.">その基本的なCORS構成セクションを影響を受けるリソースにマップする<code>path-pattern</code>パス・パターン。</span></p>

</li>
</ul>
</li>
</ul>
<p><span class="merged" id="all.kcifA" title="原文 : You can use mapped configuration to your advantage if you want to allow your users to override the CORS behavior set up in the application code.">アプリケーション・コードで設定されたCORS動作をユーザーがオーバーライドできるようにする場合は、マップされた構成を利用できます。</span></p>

<p><span class="merged" id="all.Z2DyD" title="原文 : The following example illustrates the mapped cross-origin configuration format.">次の例は、マップされたクロス・オリジン構成の形式を示しています。</span></p>

<markup
lang="hocon"

>...
cors: <span class="conum" data-value="1" />
  paths: <span class="conum" data-value="2" />
    - path-pattern: /greeting <span class="conum" data-value="3" />
      allow-origins: ["http://foo.com", "http://there.com", "http://other.com"] <span class="conum" data-value="4" />
      allow-methods: ["PUT", "DELETE"]
    - path-pattern: / <span class="conum" data-value="5" />
      allow-methods: ["GET", "HEAD", "OPTIONS", "POST"] <span class="conum" data-value="6" />
...</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1st9Vu" title="原文 : The unique identifier for this mapped CORS config section must be cors.">このマップ済CORS構成セクションの一意の識別子は、<code>cors</code>である必要があります。</span></li>
<li data-value="2"><span class="merged" id="all.3hUVgb" title="原文 : Collects the sequence of entries, each of which maps a basic CORS config to a path pattern.">エントリのシーケンスを収集し、それぞれが基本CORS構成をパス・パターンにマップします。</span></li>
<li data-value="3"><span class="merged" id="all.36fbXU" title="原文 : Marks the beginning of an entry (the - character) and maps the associated basic CORS config to the /greeting subresource (the path-pattern key and value).">エントリの開始をマークし(<code>-</code>文字)、関連付けられた基本CORS構成を<code>/greeting</code>サブリソース(<code>path-pattern</code>キーおよび値)にマップします。</span></li>
<li data-value="4"><span class="merged" id="all.ovWjJ" title="原文 : Begins the basic CORS config section for /greeting; it restricts sharing via PUT and DELETE to the listed origins."><code>/greeting</code>の基本CORS構成セクションを開始し、<code>PUT</code>および<code>DELETE</code>を介した共有をリストされたオリジンに制限します。</span></li>
<li data-value="5"><span class="merged" id="all.CjGwV" title="原文 : Marks the beginning of the next entry (the - character) and maps the associated basic CORS config to the top-level resource in the app (the path-pattern key and value).">次のエントリの開始をマークし(<code>-</code>文字)、関連付けられた基本CORS構成をアプリケーションの最上位リソース(<code>path-pattern</code>キーおよび値)にマップします。</span></li>
<li data-value="6"><span class="merged" id="all.SxMBG" title="原文 : Begins the basic CORS config section for /; it permits sharing of resources at the top-level path with all origins for the indicated HTTP methods."><code>/</code>の基本CORS構成セクションを開始します。これにより、指定されたHTTPメソッドのすべてのオリジンと最上位パスのリソースを共有できます。</span></li>
</ul>
<p><span class="merged" id="all.2NJvkH" title="原文 : Path patterns can be any expression accepted by the PathMatcher class.">パス・パターンには、<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/PathMatcher.html" id="" target="_blank" ><code>PathMatcher</code></a>クラスで使用できる任意の式を指定できます。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3gE4C2.spl1" title="原文 : Be sure to arrange the entries in the order that you want Helidon to check them.">Helidonでチェックする順序にエントリを配置してください。</span> <span class="merged" id="all.3gE4C2.spl2" title="原文 : Helidon CORS support searches the cross-origin entries in the order you define them until it finds an entry that matches an incoming request&rsquo;s path pattern and HTTP method.">Helidon CORSサポートは、受信リクエストのパス・パターンおよびHTTPメソッドに一致するエントリが見つかるまで、定義した順序でクロス・オリジン・エントリを検索します。</span> </p>
</div>
</div>
</div>

<h2 id="_specifying_override_values_in_configuration"><span class="merged" id="all.1YT48H" title="原文 : Specifying Override Values in Configuration">構成でのオーバーライド値の指定</span></h2>
<div class="section">
<p><span class="merged" id="all.1CtmjH" title="原文 : In configuration, you can specify the same CORS-related attributes that you specify using the @CrossOrigin annotation.">構成では、<code>@CrossOrigin</code>注釈を使用して指定したのと同じCORS関連の属性を指定できます。</span></p>

<p><span class="merged" id="all.1V5Lni.spl1" title="原文 : The following example shows how you can express configuration similar to that shown previously using the mapped cross-origin configuration format.">次の例は、マップされたクロス・オリジン構成形式を使用して、前述のような構成を表現する方法を示しています。</span> <span class="merged" id="all.1V5Lni.spl2" title="原文 : Here, the example uses properties-file syntax in your applications&rsquo;s META-INF/microprofile-config.properties file.">ここでは、アプリケーションの<code>META-INF/microprofile-config.properties</code>ファイルでproperties-file構文を使用します。</span> <span class="merged" id="all.1V5Lni.spl3" title="原文 : Note that the top-level config key must be cors.">最上位の構成キーは<code>cors</code>である必要があります。</span> </p>

<markup
lang="properties"

>cors.paths.0.path-pattern = /greeting
cors.paths.0.allow-origins = http://foo.com, http://there.com, http://other.com
cors.paths.0.allow-methods = PUT, DELETE
cors.paths.1.path-pattern = /
cors.paths.1.allow-methods = GET, HEAD, OPTIONS, POST</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.mt35Y" title="原文 : Remember that if you set configuration in a file that you include as part of your application JAR file, then you need to rebuild and restart your application for any changes to take effect.">アプリケーションJARファイルの一部として含めるファイルに構成を設定した場合、変更を有効にするには、アプリケーションを再ビルドして再起動する必要があります。</span></p>
</div>
</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.2"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1EvSFK.spl1" title="原文 : Use these same configuration techniques to control the behavior of the CORS-enabled built-in services.">これらと同じ構成手法を使用して、CORS対応の組込みサービスの動作を制御します。</span> <span class="merged" id="all.1EvSFK.spl2" title="原文 : Learn more."><router-link to="/mp/cors/04_support-in-builtin-services">さらに学習します。</router-link></span> </p>

</li>
<li>
<p><span class="merged" id="all.2b3Fwa.1" title="原文 : See the Helidon CORS support in action by building and running the CORS example."><a href="https://github.com/oracle/helidon/tree/2.2.1-SNAPSHOT/examples/microprofile/cors" id="" target="_blank" >「CORSの例」</a>をビルドして実行し、動作中のHelidon CORSサポートを参照してください。</span></p>

</li>
</ul>
</div>
</doc-view>
