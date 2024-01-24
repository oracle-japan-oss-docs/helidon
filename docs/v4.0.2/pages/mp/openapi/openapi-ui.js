<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.21"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.20" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.15" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.12" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.10" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.14" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.12" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.20"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3ZmPhW.spl1" title="原文 : SmallRye offers an OpenAPI user interface component which displays a web page based on your application’s OpenAPI document.">SmallRyeには、アプリケーションのOpenAPIドキュメントに基づいてwebページを表示する<a href="https://github.com/smallrye/smallrye-open-api/tree/3.3.4/ui/open-api-ui" target="_blank">「OpenAPIユーザー・インタフェース・コンポーネント」</a>が用意されています。</span> <span class="merged" id="all.3ZmPhW.spl2" title="原文 : Through that UI, users can invoke the operations declared in the document.">そのUIを使用して、ユーザーはドキュメントで宣言された操作を起動できます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.6"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.47NJmA.spl1" title="原文 : The Helidon team discourages including the OpenAPI UI in production applications.">Helidonチームは、本番アプリケーションにOpenAPI UIを含めることをお薦めしません。</span> <span class="merged" id="all.47NJmA.spl2" title="原文 : The OpenAPI UI can be useful for demonstrating and testing your service’s endpoints prior to deployment.">OpenAPI UIは、デプロイメント前にサービスのエンドポイントをデモンストレーションおよびテストする場合に役立ちます。</span> </p>
</p>
</div>

<p><span class="merged" id="all.dI73k" title="原文 : The Helidon OpenAPI component allows you to integrate the SmallRye UI into your application, adding the UI web page to your application very simply.">Helidon OpenAPIコンポーネントを使用すると、SmallRye UIをアプリケーションに統合して、UI webページを非常に簡単にアプリケーションに追加できます。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.18"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1XgCd2" title="原文 : To enable Helidon OpenAPI UI support add the following dependency to your project’s pom.xml (see Managing Dependencies).">Helidon OpenAPI UIサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照してください)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.openapi-ui&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-openapi-ui&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.LXdpl" title="原文 : And add a runtime dependency on the SmallRye UI.">また、SmallRye UIにランタイム依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.smallrye&lt;/groupId&gt;
    &lt;artifactId&gt;smallrye-open-api-ui&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3EX2Jj" title="原文 : Also make sure your project has the following dependency to include OpenAPI support in your Helidon MP application.">また、Helidon MPアプリケーションにOpenAPIサポートを含めるために、プロジェクトに次の依存関係があることを確認してください。</span></p>

<markup
lang="xml"

>    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.microprofile.openapi&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-microprofile-openapi&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.14"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.4Wg3Q.spl1" title="原文 : After you modify, build, and start your Helidon MP service, you can access the OpenAPI UI by default at http://your-host:your-port/openapi/ui.">Helidon MPサービスを変更、ビルドおよび起動した後、デフォルトで<code><a class="bare" href="http://your-host:your-port/openapi/ui" target="_blank">http://your-host:your-port/openapi/ui</a></code>でOpenAPI UIにアクセスできます。</span> <span class="merged" id="all.4Wg3Q.spl2" title="原文 : Helidon also uses conventional content negotiation at http://your-host:your-port/openapi returning the UI to browsers (or any client that accepts HTML) and the OpenAPI document otherwise.">また、Helidonは、<code><a class="bare" href="http://your-host:your-port/openapi" target="_blank">http://your-host:your-port/openapi</a></code>で従来のコンテンツ・ネゴシエーションを使用して、UIをブラウザ(またはHTMLを受け入れるクライアント)に戻し、それ以外の場合はOpenAPIドキュメントを返します。</span> </p>

<p><span class="merged" id="all.1PFHH0" title="原文 : You can customize the path using configuration.">パスは、<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">configuration</router-link>を使用してカスタマイズできます。</span></p>

<p><span class="merged" id="all.3xuWg8" title="原文 : The example below shows the UI for the Helidon MP QuickStart greeting application.">次の例は、Helidon MP QuickStartグリーティング・アプリケーションのUIを示しています。</span></p>


<div class="block-title"><span class="merged" id="all.qzOyR" title="原文 : Example OpenAPI UI Screen"><span>例OpenAPI UI画面</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="openapi uiスクリーン・キャプチャ・グリーティングMP開始" src="images/openapi-ui-screen-capture-greeting-mp-start.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.CxcpJ" title="原文 : With the OpenAPI UI displayed, follow these steps to access one of your service’s operations.">OpenAPI UIが表示された状態で、次のステップに従ってサービスの操作の1つにアクセスします。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.ITz3C" title="原文 : Find the operation you want to run and click on its row in the list.">実行する操作を検索し、リスト内のその行をクリックします。</span>

</li>
<li>
<span class="merged" id="all.31xSjo.spl1" title="原文 : The UI expands the operation, showing any input parameters and the possible responses.">UIによって操作が展開され、入力パラメータと可能なレスポンスが表示されます。</span> <span class="merged" id="all.31xSjo.spl2" title="原文 : Click the &quot;Try it out&quot; button in the operation’s row.">操作の行で「試してみる」ボタンをクリックします。</span> 

</li>
<li>
<span class="merged" id="all.3DtoJ1.spl1" title="原文 : The UI now allows you to type into the input parameter field(s) to the right of each parameter name.">UIでは、各パラメータ名の右側にある入力パラメータ・フィールドに入力できるようになりました。</span> <span class="merged" id="all.3DtoJ1.spl2" title="原文 : Enter any required parameter values (first highlighted rectangle) and any non-required values you wish, then click &quot;Execute&quot; (highlighted arrow).">必要なパラメータ値(最初に強調表示された矩形)および必須でない値を入力し、「実行」(強調表示された矢印)をクリックします。</span> 

</li>
<li>
<span class="merged" id="all.FRuj4" title="原文 : Just below the &quot;Execute&quot; button the UI shows several sections: ">「実行」ボタンのすぐ下に、UIにはいくつかのセクションが表示されます:<br></span>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1KeWN0" title="原文 : the equivalent curl command for submitting the request with your inputs,">入力したリクエストを送信するための同等の<code>curl</code>コマンド。</span></p>

</li>
<li>
<p><span class="merged" id="all.4W1fZK" title="原文 : the URL used for the request, and">リクエストに使用されるURL、および</span></p>

</li>
<li>
<p><span class="merged" id="all.9KTJw" title="原文 : a new &quot;Server response&quot; section (second highlighted rectangle) containing several items from the response: ">レスポンスのいくつかの項目を含む新しい「サーバー・レスポンス」セクション(強調表示された2番目の矩形):<br></span>
</p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3bvfd2"  title="原文:: HTTP status code">HTTPステータス・コード</span></p>

</li>
<li>
<p><span class="merged" id="all.41OowE"  title="原文:: body">body</span></p>

</li>
<li>
<p><span class="merged" id="all.4WSaxB"  title="原文:: headers">headers</span></p>

</li>
</ul>

</li>
</ul>

</li>
</ol>

<p><span class="merged" id="all.4YWqiK" title="原文 : The next image shows the screen after you submit the &quot;Returns a personalized greeting&quot; operation.">次のイメージは、「パーソナライズされたグリーティングを返す」操作を送信した後の画面を示しています。</span></p>

<p><span class="merged" id="all.2uq967.spl1" title="原文 : Note that the UI shows the actual response from invoking the operation in the &quot;Server response&quot; section.">UIには、「サーバー・レスポンス」セクションの操作の起動による実際のレスポンスが表示されます。</span> <span class="merged" id="all.2uq967.spl2" title="原文 : The &quot;Responses&quot; section farther below describes the possible responses from the operation as declared in the OpenAPI document for the application.">次の「レスポンス」セクションでは、アプリケーションのOpenAPIドキュメントで宣言されている操作からのレスポンスについて説明します。</span> </p>


<div class="block-title"><span class="merged" id="all.qzOyR.1" title="原文 : Example OpenAPI UI Screen"><span>例OpenAPI UI画面</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="openapi uiスクリーンキャプチャグリーティングmpが展開されました" src="images/openapi-ui-screen-capture-greeting-mp-expanded.png" /> </v-card-text> </v-card>


</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.10"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.Es7h6.spl1" title="原文 : Your Helidon MP application does not use any API to enable or control Helidon OpenAPI UI support.">Helidon MPアプリケーションは、Helidon OpenAPI UIサポートの有効化または制御にAPIを使用しません。</span> <span class="merged" id="all.Es7h6.spl2" title="原文 : Adding the dependency as described earlier is sufficient, and you can control the UI behavior using configuration.">前述のように依存関係を追加すれば十分であり、<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">configuration</router-link>を使用してUIの動作を制御できます。</span> </p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.15"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.2lylAO" title="原文 : To use configuration to control how the Helidon OpenAPI UI service behaves, add mp.openapi.services.ui settings to your META-INF/microprofile-config.properties file.">構成を使用してHelidon OpenAPI UIサービスの動作を制御するには、<code>mp.openapi.services.ui</code>設定を<code>META-INF/microprofile-config.properties</code>ファイルに追加します。</span></p>

<p><span class="merged" id="all.4L1zZb.1" title="原文 : Type: io.helidon.integrations.openapi.ui.OpenApiUi">タイプ: <a href="/apidocs/io.helidon.integrations.openapi.ui/io/helidon/integrations/openapi/ui/OpenApiUi.html" target="_blank">io.helidon.integrations.openapi.ui.OpenApiUi</a></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.111"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.106" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.117"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.115"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.117"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.118"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.22"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.173"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.89"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4SXIcv.1" title="原文 : Sets whether the service should be enabled.">サービスを有効にするかどうかを設定します。</span></p>

<markup>@return `true` if enabled, `false` otherwise</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ueYs0.1"  title="原文: options"><code>options</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.8" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3jJt7Q.1" title="原文 : Merges implementation-specific UI options.">実装固有のUIオプションをマージします。</span></p>

<markup>@return options for the UI to merge</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.6"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.244"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2y0kt2.1" title="原文 : Full web context (not just the suffix).">完全なwebコンテキスト(サフィクスのみではありません)。</span></p>

<markup>@return full web context path</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2qAkSV.spl1" title="原文 : The default UI web-context value is the web context for your OpenApiFeature service with the added suffix /ui.">デフォルトのUI <code>web-context</code>値は、サフィクス<code>/ui</code>が追加された<code>OpenApiFeature</code>サービスのwebコンテキストです。</span> <span class="merged" id="all.2qAkSV.spl2" title="原文 : If you use the default web context for both OpenApiFeature and the UI, the UI responds at /openapi/ui."><code>OpenApiFeature</code>とUIの両方でデフォルトのwebコンテキストを使用する場合、UIは<code>/openapi/ui</code>で応答します。</span> </p>

<p><span class="merged" id="all.s7dU0" title="原文 : You can use configuration to affect the UI path in two ways:">構成を使用して、次の2つの方法でUIパスに影響を与えることができます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.fTxlk" title="原文 : Configure the OpenAPI endpoint path (the /openapi part).">OpenAPIエンドポイント・パス(<code>/openapi</code>部分)を構成します。</span></p>
<p><span class="merged" id="all.ZGLl1" title="原文 : Recall that you can configure the Helidon OpenAPI component to change where it serves the OpenAPI document."><router-link :to="{path: '/mp/openapi/openapi', hash: '#config'}">「Helidon OpenAPIコンポーネントを構成」</router-link>は、OpenAPIドキュメントの提供場所を変更できます。</span></p>

<markup
lang="properties"
title="Configuring the OpenAPI web context"
>mp.openapi.web-context=/my-openapi</markup>

<p><span class="merged" id="all.509Ub.spl1" title="原文 : In this case, the path for the UI component is your customized OpenAPI path with /ui as a suffix.">この場合、UIコンポーネントのパスは、サフィクスとして<code>/ui</code>を持つカスタマイズされたOpenAPIパスです。</span> <span class="merged" id="all.509Ub.spl2" title="原文 : With the example above, the UI responds at /my-openapi/ui and Helidon uses standard content negotiation at /my-openapi to return either the OpenAPI document or the UI.">前述の例では、UIは<code>/my-openapi/ui</code>で応答し、Helidonは<code>/my-openapi</code>の標準コンテンツ・ネゴシエーションを使用して、OpenAPIドキュメントまたはUIのいずれかを返します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.45FcD0" title="原文 : Separately, configure the entire web context path for the UI independently from the web context for OpenAPI.">これとは別に、OpenAPIのwebコンテキストとは別に、UIのWebコンテキスト・パス全体を構成します。</span></p>
<markup
lang="properties"
title="Configuring the OpenAPI UI web context"
>mp.openapi.services.ui.web-context=/my-ui</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.7"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.lkMkY" title="原文 : The mp.openapi.services.ui.web-context setting assigns the entire web-context for the UI, not the suffix appended to the OpenApiFeature endpoint."><code>mp.openapi.services.ui.web-context</code>設定は、<code>OpenApiFeature</code>エンドポイントに追加されたサフィクスではなく、UIに<em>「全体」</em> webコンテキストを割り当てます。</span></p>
</p>
</div>

<p><span class="merged" id="all.JMhwN" title="原文 : With this configuration, the UI responds at /my-ui regardless of the path for OpenAPI itself.">この構成では、OpenAPI自体のパスに関係なく、UIは<code>/my-ui</code>で応答します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.3OEe60.spl1" title="原文 : The SmallRye OpenAPI UI component accepts several options, but they are of minimal use to application developers and they must be passed to the SmallRye UI code programmatically.">SmallRye OpenAPI UIコンポーネントは、いくつかのオプションを受け入れますが、アプリケーション開発者は最小限に使用でき、プログラムでSmallRye UIコードに渡す必要があります。</span> <span class="merged" id="all.3OEe60.spl2" title="原文 : Helidon allows you to specify these values using configuration in the mp.openapi.services.ui.options section.">Helidonでは、<code>mp.openapi.services.ui.options</code>セクションの構成を使用してこれらの値を指定できます。</span> <span class="merged" id="all.3OEe60.spl3" title="原文 : Helidon then passes the corresponding options to SmallRye for you.">Helidonは、対応するオプションをSmallRyeに渡します。</span> <span class="merged" id="all.3OEe60.spl4" title="原文 : To configure any of these settings, use the enum values-​they are all lower case-​declared in the SmallRye Option.java class as the keys in your Helidon configuration.">これらの設定のいずれかを構成するには、列挙値(すべて小文字)をSmallRye <a href="https://github.com/smallrye/smallrye-open-api/tree/3.3.4/ui/open-api-ui/src/main/java/io/smallrye/openapi/ui/Option.java" target="_blank"><code>Option.java</code></a>クラスでHelidon構成のキーとして宣言します。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.8"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3fwa9D.spl1" title="原文 : Helidon prepares several of the SmallRye options automatically based on other settings.">Helidonは、他の設定に基づいて、いくつかのSmallRyeオプションを自動的に準備します。</span> <span class="merged" id="all.3fwa9D.spl2" title="原文 : Any options you configure override the values Helidon assigns, possibly interfering with the proper operation of the UI.">構成するオプションは、Helidonによって割り当てられる値をオーバーライドし、UIの適切な動作を妨げる可能性があります。</span> </p>
</p>
</div>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.14"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.11Yapl" title="原文 : Helidon OpenAPI MP documentation"><router-link to="/mp/openapi/openapi">Helidon OpenAPI MPドキュメント</router-link></span></p>

<p><span class="merged" id="all.W6xNp" title="原文 : SmallRye OpenAPI UI GitHub site"><a href="https://github.com/smallrye/smallrye-open-api/tree/3.3.4/ui/open-api-ui" target="_blank">SmallRye OpenAPI UI GitHubサイト</a></span></p>

</div>

</doc-view>
