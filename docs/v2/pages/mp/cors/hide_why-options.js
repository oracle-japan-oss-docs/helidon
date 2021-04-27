<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.bigR7" title="原文 : Why `@OPTIONS`?">なぜ`@OPTIONS`?</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1pTL2x.spl1" title="原文 : There are some good reasons why it is @OPTIONS methods that you decorate with the Helidon MP @CrossOrigin annotation.">Helidon MP <code>@CrossOrigin</code>注釈で修飾する<code>@OPTIONS</code>メソッドである理由はいくつかあります。</span> <span class="merged" id="all.1pTL2x.spl2" title="原文 : Take an informal look at the rationale for this choice.">この選択の根拠を非公式に見てください。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_the_resource"><span class="merged" id="all.15IXFP" title="原文 : The Resource">リソース</span></h2>
<div class="section">
<p><span class="merged" id="all.3ptEnv.spl1" title="原文 : At the heart of cross-origin resource sharing is the resource itself.">クロス・オリジン・リソース共有の中心となるのは、<em>「リソース」</em>自体です。</span> <span class="merged" id="all.3ptEnv.spl2" title="原文 : CORS lets you control how a given resource should be shared among various origins.">CORSを使用すると、特定のリソースを様々なオリジン間で共有する方法を制御できます。</span> <span class="merged" id="all.3ptEnv.spl3" title="原文 : All the attributes of CORS - whether authentication should be used, what headers can be passed through on CORS-controlled requests, and so on - pertain to a given resource.">CORSのすべての属性(認証を使用するかどうか、CORSで制御されるリクエストで渡すことができるヘッダーなど)は、特定のリソースに関連します。</span> </p>

<p><span class="merged" id="all.7AuuS.spl1" title="原文 : In Helidon MP, the parameters defined on the @CrossOrigin annotation map directly to those CORS sharing attributes.">Helidon MPでは、<code>@CrossOrigin</code>注釈で定義されたパラメータは、CORS共有属性に直接マップされます。</span> <span class="merged" id="all.7AuuS.spl2" title="原文 : It would be natural, then, to use @CrossOrigin to annotate the single Java element in the application that represents a resource.">通常は、<code>@CrossOrigin</code>を使用して、リソースを表すアプリケーション内の単一のJava要素に注釈を付けます。</span> </p>

</div>

<h2 id="_methods_resources_and_subresources_in_jax_rs_resource_classes"><span class="merged" id="all.2zlwrn" title="原文 : Methods, Resources, and Subresources in JAX-RS Resource Classes">JAX-RSリソース・クラスのメソッド、リソースおよびサブリソース</span></h2>
<div class="section">
<p><span class="merged" id="all.35pXOh" title="原文 : Unfortunately, there is no single Java element that is sure to correspond one-to-one with a JAX-RS resource, for two reasons.">残念ながら、JAX-RSリソースに1対1で対応する単一のJava要素はありません。その理由はいくつかあります。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1O546M.spl1" title="原文 : JAX-RS allows a resource class to define one or more subresources, denoted by the @Path annotation on methods.">JAX-RSを使用すると、リソース・クラスで、メソッドの<code>@Path</code>注釈で示される1つ以上のサブリソースを定義できます。</span> <span class="merged" id="all.1O546M.spl2" title="原文 : So a resource class does not necessarily represent only a single resource.">したがって、リソース・クラスは必ずしも単一のリソースを表すわけではありません。</span> 

</li>
<li>
<span class="merged" id="all.4Wi19u.spl1" title="原文 : A JAX-RS resource class can contain multiple endpoints for the same resource.">JAX-RSリソース・クラスには、同じリソースの複数のエンドポイントを含めることができます。</span> <span class="merged" id="all.4Wi19u.spl2" title="原文 : A common example is two methods, annotated with @GET and @PUT respectively, that have the same path.">一般的な例は、それぞれ同じパスを持つ<code>@GET</code>および<code>@PUT</code>の注釈が付いた2つのメソッドです。</span> 

</li>
</ol>
<p><span class="merged" id="all.3Y3AaR.spl1" title="原文 : Although no single endpoint method by itself fully represents the resource, at least each endpoint method maps to exactly one resource.">リソースを完全に表す単一のエンドポイント・メソッドはありませんが、少なくとも各エンドポイント・メソッドは1つのリソースにマップされます。</span> <span class="merged" id="all.3Y3AaR.spl2" title="原文 : So we could annotate any one of those endpoint methods with @CrossOrigin and unambiguously link the CORS behavior that the annotation defines to the resource.">そのため、これらのエンドポイント・メソッドのいずれかに<code>@CrossOrigin</code>の注釈を付け、注釈で定義されているCORS動作をリソースに明確にリンクできます。</span> </p>

<p><span class="merged" id="all.t0KE" title="原文 : But which endpoint method, and why?">しかし、どのエンドポイント・メソッドですか。また、その理由は何ですか。</span></p>

</div>

<h2 id="_options_in_cors_options_in_jax_rs_and_technical_reality"><span class="merged" id="all.2R5Jzg" title="原文 : OPTIONS in CORS, @OPTIONS in JAX-RS, and Technical Reality">CORSの<code>OPTIONS</code> 、JAX-RSの<code>@OPTIONS</code>、および技術的現実</span></h2>
<div class="section">
<p><span class="merged" id="all.3Zsm8Q.spl1" title="原文 : The OPTIONS HTTP method plays an important role in CORS."><code>OPTIONS</code> HTTPメソッドはCORSで重要なロールを果たします。</span> <span class="merged" id="all.3Zsm8Q.spl2" title="原文 : While the CORS protocol applies to all HTTP methods, it relies on OPTIONS - with suitable headers - to represent CORS pre-flight requests.">CORSプロトコルはすべてのHTTPメソッドに対して<em>「適用」</em>しますが、<code>OPTIONS</code>に<em>「依存」</em>して (適したヘッダーで) CORSフライト・リクエストを表します。</span> <span class="merged" id="all.3Zsm8Q.spl3" title="原文 : From that point of view, the OPTIONS HTTP method has a more prominent place in CORS than the other methods.">その観点から言えば、<code>OPTIONS</code> HTTPメソッドは他のメソッドよりもCORS内に目立つ場所を持っています。</span> </p>

<p><span class="merged" id="all.4ICbW5.spl1" title="原文 : In a JAX-RS resource class, the @OPTIONS annotation denotes which endpoint method should receive incoming OPTIONS HTTP requests for a resource.">JAX-RSリソース・クラスでは、<code>@OPTIONS</code>注釈は、リソースに対する着信<code>OPTIONS</code> HTTPリクエストを受信するエンドポイント・メソッドを示します。</span> <span class="merged" id="all.4ICbW5.spl2" title="原文 : Therefore, we could view a Java method annotated with @OPTIONS as somewhat distinguished in the same way that we think of the OPTIONS HTTP method as distinguished within the CORS protocol.">したがって、CORSプロトコル内で<code>OPTIONS</code> HTTPメソッドが識別されていると考えるのと同じ方法で、<code>@OPTIONS</code>の注釈が付いたJavaメソッドを表示できます。</span> </p>

<p><span class="merged" id="all.3bpoHz.spl1" title="原文 : Furthermore, there is this technical detail: Helidon MP uses a JAX-RS filter internally to gather information about each @CrossOrigin annotation.">さらに、この技術的な詳細があります: Helidon MPでは、JAX-RSフィルタを内部的に使用して、各<code>@CrossOrigin</code>注釈に関する情報を収集します。</span> <span class="merged" id="all.3bpoHz.spl2" title="原文 : Some JAX-RS implementations do not provide the filter with what it needs to find and introspect the @CrossOrigin annotation unless the application itself implements the @OPTIONS endpoint for the resource.">一部のJAX-RS実装では、アプリケーション自体がリソースの<code>@OPTIONS</code>エンドポイントを実装していないかぎり、<code>@CrossOrigin</code>注釈を検索およびイントロスペクトするために必要なものがフィルタに提供されません。</span> </p>

</div>

<h2 id="_the_bottom_line"><span class="merged" id="all.NnRWG"  title="原文:: The Bottom Line">結論</span></h2>
<div class="section">
<p><span class="merged" id="all.rLso9.spl1" title="原文 : If you want a resource to participate in CORS, Helidon MP needs you to implement the @OPTIONS endpoint method for the resource, even if the method does nothing.">リソースをCORSに参加させる場合、Helidon MPでは、メソッドが何も実行しない場合でも、リソースの<code>@OPTIONS</code>エンドポイント・メソッドを実装する必要があります。</span> <span class="merged" id="all.rLso9.spl2" title="原文 : Given that you have to write that method, and given that any endpoint method uniquely identifies its resource, the @OPTIONS method is a reasonable place to ask you to annotate with @CrossOrigin.">そのメソッドを記述する必要があり、任意のエンドポイント・メソッドがそのリソースを一意に識別する場合、<code>@OPTIONS</code>メソッドは<code>@CrossOrigin</code>の注釈を付ける適切な場所です。</span> </p>

</div>
</doc-view>
