<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2itaFT" title="原文 : About CORS in Helidon SE">Helidon SEのCORSについて</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3GuYQC" title="原文 : Cross-origin resource sharing (CORS) support in Helidon SE provides a flexible mechanism that allows a Helidon SE application to control how another web application can access its resources, even if that web application is served from a different domain.">Helidon SEでの<a href="https://www.w3.org/TR/cors/" id="" target="_blank" >Cross-origin resource sharing</a> (CORS)のサポートにより、Helidon SEアプリケーションが別のドメインから提供されている場合でも、別のwebアプリケーションがそのリソースにアクセスする方法を制御できる柔軟なメカニズムが提供されます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_overview"><span class="merged" id="all.YrpRV.10"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2vwqfq.spl1" title="原文 : The CORS protocol helps developers control if and how REST resources served by their applications can be shared across origins.">CORSプロトコルは、開発者がアプリケーションによって提供されるRESTリソースをオリジン間で共有できるかどうか、およびその方法を制御するのに役立ちます。</span> <span class="merged" id="all.2vwqfq.spl2" title="原文 : Helidon SE includes an implementation of CORS that you can use to add CORS behavior to the services you develop.">Helidon SEには、開発するサービスにCORSの動作を追加するために使用できるCORSの実装が含まれています。</span> <span class="merged" id="all.2vwqfq.spl3" title="原文 : You can define your application&rsquo;s CORS behavior programmatically using the Helidon CORS API alone, or together with configuration.">アプリケーションのCORS動作は、Helidon CORS APIのみを使用してプログラムで定義することも、構成とともに定義することもできます。</span> <span class="merged" id="all.2vwqfq.spl4" title="原文 : Helidon also provides three built-in services that add their own endpoints to your application - health, metrics, and OpenAPI - that have integrated CORS support.">Helidonには、独自のエンドポイントをアプリケーションに追加する3つの組込みサービスも用意されています - ヘルス、メトリクスおよびOpenAPI - CORSサポートが統合されています。</span> <span class="merged" id="all.2vwqfq.spl5" title="原文 : By adding very little code to your application, you control how all the resources in your application - the ones you write and the ones provided by the Helidon built-in services - can be shared across origins.">アプリケーションにコードをほとんど追加しないことで、アプリケーション内のすべてのリソース(作成するリソースとHelidon組込みサービスによって提供されるリソース)をオリジン間で共有する方法を制御できます。</span> </p>

</div>

<h2 id="_before_you_begin"><span class="merged" id="all.428ran.1"  title="原文:: Before You Begin">始める前に</span></h2>
<div class="section">
<p><span class="merged" id="all.KkrOb.1.spl1" title="原文 : Before you revise your application to add CORS support, you need to decide what type of cross-origin sharing you want to allow for each resource your application exposes.">CORSサポートを追加するようにアプリケーションを変更する前に、アプリケーションで公開するリソースごとに許可するクロス・オリジン共有のタイプを決定する必要があります。</span> <span class="merged" id="all.KkrOb.1.spl2" title="原文 : For example, suppose for a given resource you want to allow unrestricted sharing for GET, HEAD, and POST requests (what CORS refers to as &quot;simple&quot; requests), but permit other types of requests only from the two origins foo.com and there.com.">たとえば、特定のリソースに対して、GET、HEADおよびPOSTリクエスト(CORSで単純リクエストと呼ばれるもの)の無制限の共有を許可するが、他のタイプのリクエストは元の<code>foo.com</code>および<code>there.com</code>からのみ許可するとします。</span> <span class="merged" id="all.KkrOb.1.spl3" title="原文 : Your application would implement two types of CORS sharing: more relaxed for the simple requests and stricter for others.">アプリケーションでは、2タイプのCORS共有を実装: 単純なリクエストの場合は緩和され、それ以外の場合は厳格になります。</span> </p>

<p><span class="merged" id="all.HxLpR.1" title="原文 : Once you know the type of sharing you want to allow for each of your resources - including any from built-in services - you can change your application accordingly.">組込みサービスを含む各リソースに許可する共有のタイプがわかったら、それに応じてアプリケーションを変更できます。</span></p>

</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.9"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.3Hrw7I" title="原文 : To introduce CORS into your Helidon SE application, do any or all of the following:">CORSをHelidon SEアプリケーションに導入するには、次のいずれかまたはすべてを実行します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2G8lxw.spl1" title="原文 : Modify your code using the Helidon SE CORS API.">Helidon SE CORS APIを使用してコードを変更します。</span> <span class="merged" id="all.2G8lxw.spl2" title="原文 : Learn more."><router-link to="/se/cors/02_using-the-api">さらに学習します。</router-link></span> </p>

</li>
<li>
<p><span class="merged" id="all.2XVX3s.spl1" title="原文 : Use configuration in combination with the Helidon SE CORS API to add CORS to your application.">Helidon SE CORS APIと組み合せて構成を使用して、CORSをアプリケーションに追加します。</span> <span class="merged" id="all.2XVX3s.spl2" title="原文 : Learn more."><router-link to="/se/cors/03_using-configuration">さらに学習します。</router-link></span> </p>

</li>
<li>
<p><span class="merged" id="all.1jD5gZ.spl1" title="原文 : Update your application to include any of the built-in Helidon services that automatically support CORS.">CORSを自動的にサポートする組込みHelidonサービスを含めるようにアプリケーションを更新します。</span> <span class="merged" id="all.1jD5gZ.spl2" title="原文 : Learn more."><router-link to="/se/cors/04_support-in-builtin-services">さらに学習します。</router-link></span> </p>

</li>
</ul>
</div>
</doc-view>
