<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4eqQLQ" title="原文 : Using the Helidon MP CORS API">Helidon MP CORS APIの使用</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2txlIP" title="原文 : To enable CORS behavior for a resource in your Helidon MP application, you simply add the Helidon MP @CrossOrigin annotation to a particular method in your resource class.">Helidon MPアプリケーションのリソースに対してCORS動作を有効にするには、リソース・クラスの特定のメソッドにHelidon MP <code>@CrossOrigin</code>注釈を追加します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.3"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3KHkSD" title="原文 : To enable CORS add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">CORSを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-cors&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_understanding_the_crossorigin_annotation"><span class="merged" id="all.3qpLlQ" title="原文 : Understanding the @CrossOrigin Annotation"><code>@CrossOrigin</code>注釈の理解</span></h2>
<div class="section">
<p><span class="merged" id="all.MAawT" title="原文 : You set up CORS in Helidon MP using the @CrossOrigin annotation.">CORSは、<a href="./apidocs/io.helidon.microprofile.cors/io/helidon/microprofile/cors/CrossOrigin.html" id="" target="_blank" ><code>@CrossOrigin</code></a>注釈を使用してHelidon MPで設定します。</span></p>

<p><span class="merged" id="all.O4En" title="原文 : The following example of the @CrossOrigin annotation allows the resource associated with it to be shared with the origins http://foo.bar and http://bar.foo using DELETE or PUT, and permits requests to include the non-standard headers X-foo and X-bar.">次の<code>@CrossOrigin</code>注釈の例では、<code>DELETE</code>または<code>PUT</code>を使用して、関連付けられたリソースをオリジンの<code>http://foo.bar</code>および<code>http://bar.foo</code>と共有でき、標準以外のヘッダー<code>X-foo</code>および<code>X-bar</code>をリクエストに含めることができます。</span></p>

<markup
lang="java"

>@CrossOrigin(value = {"http://foo.bar", "http://bar.foo"},
             allowHeaders = {"X-foo", "X-bar"},
             allowMethods = {HttpMethod.DELETE, HttpMethod.PUT})</markup>

</div>

<h2 id="_getting_started"><span class="merged" id="all.J6ASm"  title="原文:: Getting Started">開始</span></h2>
<div class="section">
<p><span class="merged" id="all.2wGWVt" title="原文 : To add CORS support to your Helidon MP application:">CORSサポートをHelidon MPアプリケーションに追加するには:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1OeZRv" title="原文 : Determine the type of cross-origin resource sharing you want to allow for each endpoint in your application.">アプリケーションの各エンドポイントで許可するクロス・オリジン・リソース共有のタイプを決定します。</span>

</li>
<li>
<span class="merged" id="all.1stjsg" title="原文 : Add a dependency on the Helidon MP CORS artifact to your Maven pom.xml file.">Helidon MP CORS <router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">「アーティファクト」</router-link>への依存関係をMaven <code>pom.xml</code>ファイルに追加します。</span>

</li>
<li>
<span class="merged" id="all.tpLQZ" title="原文 : Edit each JAX-RS resource class in your application to add the desired CORS behavior as described in the following sections.">次の項の説明に従って、アプリケーションの各JAX-RSリソース・クラスを編集し、目的のCORS動作を追加します。</span>

</li>
</ol>
</div>

<h2 id="_adding_cors_support_to_your_helidon_mp_application"><span class="merged" id="all.40tssj" title="原文 : Adding CORS Support to Your Helidon MP Application">Helidon MPアプリケーションへのCORSサポートの追加</span></h2>
<div class="section">
<p><span class="merged" id="all.3RVEpr" title="原文 : Adding CORS behavior to your Helidon MP application involves three simple steps:">CORS動作をHelidon MPアプリケーションに追加するには、次の3つの簡単なステップがあります:</span></p>

<p><span class="merged" id="all.12nT39" title="原文 : For reach resource class in your application:">アプリケーション内のリーチ・リソース・クラスの場合:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1K8UfY" title="原文 : Identify the resources and subresources-​in other words, the paths-​supported in each.">リソースとサブリソース(つまり、パス)を識別します。</span>

</li>
<li>
<span class="merged" id="all.4YPe71.spl1" title="原文 : For each of those resources and subresources make sure you have a Java method annotated with @OPTIONS and with the correct @Path.">これらのリソースおよびサブリソースごとに、<code>@OPTIONS</code>と正しい<code>@Path</code>の注釈が付いたJavaメソッドがあることを確認します。</span> <span class="merged" id="all.4YPe71.spl2" title="原文 : Create these methods for each resource (for each path) if you do not already have them.">リソースごとに(パスごとに)これらのメソッドを作成します(まだ作成していない場合)。</span> 

</li>
<li>
<span class="merged" id="all.1FJvug" title="原文 : To each of those @OPTIONS methods add a @CrossOrigin annotation that describes the cross-origin sharing you want for that resource.">これらの各<code>@OPTIONS</code>メソッドには、そのリソースに必要なクロス・オリジンの共有を記述する<code>@CrossOrigin</code>注釈を追加します。</span>

</li>
</ol>
<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.2uqyuj" title="原文 : Using @CrossOrigin Correctly">@CrossOriginの正しい使用</span></p>
<p ><p><span class="merged" id="all.41Ql7S.spl1" title="原文 : Use the @CrossOrigin annotation only on methods which also have the @OPTIONS annotation."><code>@OPTIONS</code>注釈も持つメソッドには、<code>@CrossOrigin</code>注釈<em>「のみ」</em>を使用します。</span> <span class="merged" id="all.41Ql7S.spl2" title="原文 : Remember that the @CrossOrigin settings apply to a given path and therefore to all Java resource methods which share that path."><code>@CrossOrigin</code>設定は指定されたパスに適用されるため、そのパスを共有するすべてのJavaリソース・メソッドに適用されます。</span> </p>

<p><span class="merged" id="all.Ji6Fu" title="原文 : Helidon MP aborts the server start-up if a resource method other than an @OPTIONS method has the @CrossOrigin annotation."><code>@OPTIONS</code>メソッド以外のリソース・メソッドに<code>@CrossOrigin</code>注釈がある場合、Helidon MPはサーバーの起動を中止します。</span></p>
</p>
</div>
<p><span class="merged" id="all.4aUBd1" title="原文 : The Helidon MP CORS implementation automatically uses the @CrossOrigin annotation you add to each @OPTIONS method to enforce cross-origin sharing behavior for the resource identified by that method&rsquo;s @Path annotation.">Helidon MP CORS実装では、各<code>@OPTIONS</code>メソッドに追加した<code>@CrossOrigin</code>注釈を自動的に使用して、そのメソッドの<code>@Path</code>注釈で識別されるリソースのクロス・オリジン共有動作を強制します。</span></p>

<p><span class="merged" id="all.1r4tvO" title="原文 : For an informal look at the reasons for applying the @CrossOrigin annotation to the @OPTIONS method, instead of another method, see Why @OPTIONS?."><code>@CrossOrigin</code>注釈を別のメソッドではなく<code>@OPTIONS</code>メソッドに適用する理由については、<router-link to="/mp/cors/hide_why-options">「<code>@OPTIONS</code>を使用する理由」</router-link>を参照してください。</span></p>

</div>

<h2 id="_sample_application_using_the_crossorigin_annotation"><span class="merged" id="all.3dR4NJ" title="原文 : Sample Application Using the @CrossOrigin Annotation"><code>@CrossOrigin</code>注釈を使用するサンプル・アプリケーション</span></h2>
<div class="section">
<p><span class="merged" id="all.1lOKit.spl1" title="原文 : In the Helidon MP Quickstart application you can change the greeting by sending a PUT request to the /greet/greeting resource."><a href="https://github.com/oracle/helidon/tree/2.5.4/examples/quickstarts/helidon-quickstart-mp" id="" target="_blank" >「Helidon MP Quickstartアプリケーション」</a>では、<code>PUT</code>リクエストを<code>/greet/greeting</code>リソースに送信することで、応答メッセージを変更できます。</span> <span class="merged" id="all.1lOKit.spl2" title="原文 : The example below extends the Helidon MP QuickStart application (the greeting app) to:">次の例では、Helidon MP QuickStartアプリケーション(greetingアプリケーション)を次のように拡張します:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.19rL3Z" title="原文 : Permit unrestricted sharing of the resource that returns greetings, and">グリーティングを返すリソースの無制限共有を許可、および</span></p>

</li>
<li>
<p><span class="merged" id="all.3WyFgP" title="原文 : Restrict sharing of the resource that updates the greeting so that only the origins http://foo.com and http://there.com can change the greeting.">発信元の<code>http://foo.com</code>および<code>http://there.com</code>のみがグリーティングを変更できるように、グリーティングを更新するリソースの共有を制限します。</span></p>

</li>
</ul>
<markup
lang="java"

>@OPTIONS
@CrossOrigin() <span class="conum" data-value="1" />
public void options() {}

@OPTIONS
@Path("/greeting")
@CrossOrigin(allowMethods = {"PUT"}, allowOrigins = {"http://foo.com", "http://there.com"}) <span class="conum" data-value="2" />
public void optionsForGreeting() {}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4Z2uGl" title="原文 : Uses the default cross-origin sharing, which permits sharing via all HTTP methods to all origins.">デフォルトのクロス・オリジン共有を使用します。これにより、すべてのHTTPメソッドを介したすべてのオリジンへの共有が可能になります。</span></li>
<li data-value="2"><span class="merged" id="all.M3lSp" title="原文 : Specifies sharing only via the PUT HTTP method and only to the two listed origins."><code>PUT</code> HTTPメソッドを介した共有のみを指定し、リストされた2つのオリジンに対してのみ共有を指定します。</span></li>
</ul>
</div>

<h2 id="_next_steps"><span class="merged" id="all.4EVPfG"  title="原文:: Next steps">次のステップ</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.4NHC5q.spl1" title="原文 : Use MicroProfile configuration to override the CORS behavior set in the application code.">MicroProfile構成を使用して、アプリケーション・コードに設定されているCORS動作をオーバーライドします。</span> <span class="merged" id="all.4NHC5q.spl2" title="原文 : Learn more."><router-link to="/mp/cors/03_configuration-with-cors-mp">さらに学習します。</router-link></span> </p>

</li>
<li>
<p><span class="merged" id="all.2xCtrN" title="原文 : See the Helidon CORS support in action by building and running the CORS example."><a href="https://github.com/oracle/helidon/tree/2.5.4/examples/microprofile/cors" id="" target="_blank" >「CORSの例」</a>をビルドして実行し、動作中のHelidon CORSサポートを参照してください。</span></p>

</li>
</ul>
</div>
</doc-view>
