<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.65"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.64" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.46" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.41" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.24" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.38" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.27" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.80"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3ZmPhW.1.spl1" title="原文 : SmallRye offers an OpenAPI user interface component which displays a web page based on your application’s OpenAPI document.">SmallRyeには、アプリケーションのOpenAPIドキュメントに基づいてwebページを表示する<a href="https://github.com/smallrye/smallrye-open-api/tree/3.3.4/ui/open-api-ui" target="_blank">「OpenAPIユーザー・インタフェース・コンポーネント」</a>が用意されています。</span> <span class="merged" id="all.3ZmPhW.1.spl2" title="原文 : Through that UI, users can invoke the operations declared in the document.">そのUIを使用して、ユーザーはドキュメントで宣言された操作を起動できます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.16"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.47NJmA.1.spl1" title="原文 : The Helidon team discourages including the OpenAPI UI in production applications.">Helidonチームは、本番アプリケーションにOpenAPI UIを含めることをお薦めしません。</span> <span class="merged" id="all.47NJmA.1.spl2" title="原文 : The OpenAPI UI can be useful for demonstrating and testing your service’s endpoints prior to deployment.">OpenAPI UIは、デプロイメント前にサービスのエンドポイントをデモンストレーションおよびテストする場合に役立ちます。</span> </p>
</p>
</div>

<p><span class="merged" id="all.dI73k.1" title="原文 : The Helidon OpenAPI component allows you to integrate the SmallRye UI into your application, adding the UI web page to your application very simply.">Helidon OpenAPIコンポーネントを使用すると、SmallRye UIをアプリケーションに統合して、UI webページを非常に簡単にアプリケーションに追加できます。</span></p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.57"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1XgCd2.1" title="原文 : To enable Helidon OpenAPI UI support add the following dependency to your project’s pom.xml (see Managing Dependencies).">Helidon OpenAPI UIサポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照してください)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.openapi-ui&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-openapi-ui&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.LXdpl.1" title="原文 : And add a runtime dependency on the SmallRye UI.">また、SmallRye UIにランタイム依存関係を追加します。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.smallrye&lt;/groupId&gt;
    &lt;artifactId&gt;smallrye-open-api-ui&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.TlBFk" title="原文 : Also, make sure your project has the following dependency.">また、プロジェクトに次の依存関係があることを確認してください。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.openapi&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-openapi&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.uq7zH" title="原文 : This dependency allows your application to create, configure, and register the OpenApiFeature service.">この依存関係により、アプリケーションは<code>OpenApiFeature</code>サービスを作成、構成および登録できます。</span></p>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.60"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3a0ATs.spl1" title="原文 : Make sure your application incorporates Helidon OpenAPI support as described in detail in the Helidon OpenAPI documentation).">アプリケーションにHelidon OpenAPIサポートが組み込まれていることを確認します(詳細は、<a href="/home/ytakahas/git_us_top/helidon/docs/src/main/asciidoc/se/openapi/../../se/openapi/openapi.adoc" target="_blank">「Helidon OpenAPIのドキュメント」</a>を参照してください)。</span> <span class="merged" id="all.3a0ATs.spl2" title="原文 : Helidon automatically prepares the OpenAPI UI with default settings if you also declare a dependency on the Helidon OpenAPI UI integration component as explained above.">前述のように、Helidon OpenAPI UI統合コンポーネントへの依存関係を宣言する場合、Helidonはデフォルト設定でOpenAPI UIを自動的に準備します。</span> <span class="merged" id="all.3a0ATs.spl3" title="原文 : The API section below illustrates adding OpenAPI to your application and customizing the UI behavior.">次の<router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link>の項に、アプリケーションにOpenAPIを追加し、UIの動作をカスタマイズする方法を示します。</span> </p>

<p><span class="merged" id="all.3DRZwx.spl1" title="原文 : After you modify, build, and start your Helidon SE service, you can access the OpenAPI UI by default at http://your-host:your-port/openapi/ui.">Helidon SEサービスを変更、ビルドおよび起動した後、デフォルトで<code><a class="bare" href="http://your-host:your-port/openapi/ui" target="_blank">http://your-host:your-port/openapi/ui</a></code>でOpenAPI UIにアクセスできます。</span> <span class="merged" id="all.3DRZwx.spl2" title="原文 : Helidon also uses conventional content negotiation at http://your-host:your-port/openapi returning the UI to browsers (or any client that accepts HTML) and the OpenAPI document otherwise.">また、Helidonは、<code><a class="bare" href="http://your-host:your-port/openapi" target="_blank">http://your-host:your-port/openapi</a></code>で従来のコンテンツ・ネゴシエーションを使用して、UIをブラウザ(またはHTMLを受け入れるクライアント)に戻し、それ以外の場合はOpenAPIドキュメントを返します。</span> </p>

<p><span class="merged" id="all.1iuczs" title="原文 : You can customize the path using either the API or configuration.">パスは、APIまたは<router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">configuration</router-link>を使用してカスタマイズできます。</span></p>

<p><span class="merged" id="all.3AxYbz" title="原文 : The example below shows the UI if you modify the Helidon SE QuickStart greeting application to contain a static OpenAPI file which describes the service endpoints.">次の例は、サービス・エンドポイントを記述する静的OpenAPIファイルを含むようにHelidon SE QuickStartグリーティング・アプリケーションを変更した場合のUIを示しています。</span></p>


<div class="block-title"><span class="merged" id="all.qzOyR.2" title="原文 : Example OpenAPI UI Screen"><span>例OpenAPI UI画面</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="openapi uiスクリーン・キャプチャ・グリーティングの開始" src="images/openapi-ui-screen-capture-greeting-se-start.png" /> </v-card-text> </v-card>


<p><span class="merged" id="all.CxcpJ.1" title="原文 : With the OpenAPI UI displayed, follow these steps to access one of your service’s operations.">OpenAPI UIが表示された状態で、次のステップに従ってサービスの操作の1つにアクセスします。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.ITz3C.1" title="原文 : Find the operation you want to run and click on its row in the list.">実行する操作を検索し、リスト内のその行をクリックします。</span>

</li>
<li>
<span class="merged" id="all.31xSjo.1.spl1" title="原文 : The UI expands the operation, showing any input parameters and the possible responses.">UIによって操作が展開され、入力パラメータと可能なレスポンスが表示されます。</span> <span class="merged" id="all.31xSjo.1.spl2" title="原文 : Click the &quot;Try it out&quot; button in the operation’s row.">操作の行で「試してみる」ボタンをクリックします。</span> 

</li>
<li>
<span class="merged" id="all.3DtoJ1.1.spl1" title="原文 : The UI now allows you to type into the input parameter field(s) to the right of each parameter name.">UIでは、各パラメータ名の右側にある入力パラメータ・フィールドに入力できるようになりました。</span> <span class="merged" id="all.3DtoJ1.1.spl2" title="原文 : Enter any required parameter values (first highlighted rectangle) and any non-required values you wish, then click &quot;Execute&quot; (highlighted arrow).">必要なパラメータ値(最初に強調表示された矩形)および必須でない値を入力し、「実行」(強調表示された矢印)をクリックします。</span> 

</li>
<li>
<span class="merged" id="all.FRuj4.1" title="原文 : Just below the &quot;Execute&quot; button the UI shows several sections: ">「実行」ボタンのすぐ下に、UIにはいくつかのセクションが表示されます:<br></span>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1KeWN0.1" title="原文 : the equivalent curl command for submitting the request with your inputs,">入力したリクエストを送信するための同等の<code>curl</code>コマンド。</span></p>

</li>
<li>
<p><span class="merged" id="all.4W1fZK.1" title="原文 : the URL used for the request, and">リクエストに使用されるURL、および</span></p>

</li>
<li>
<p><span class="merged" id="all.9KTJw.1" title="原文 : a new &quot;Server response&quot; section (second highlighted rectangle) containing several items from the response: ">レスポンスのいくつかの項目を含む新しい「サーバー・レスポンス」セクション(強調表示された2番目の矩形):<br></span>
</p>
<ul class="ulist">
<li>
<p><span class="merged" id="all.3bvfd2.1"  title="原文:: HTTP status code">HTTPステータス・コード</span></p>

</li>
<li>
<p><span class="merged" id="all.41OowE.1"  title="原文:: body">body</span></p>

</li>
<li>
<p><span class="merged" id="all.4WSaxB.1"  title="原文:: headers">headers</span></p>

</li>
</ul>

</li>
</ul>

</li>
</ol>

<p><span class="merged" id="all.4YWqiK.1" title="原文 : The next image shows the screen after you submit the &quot;Returns a personalized greeting&quot; operation.">次のイメージは、「パーソナライズされたグリーティングを返す」操作を送信した後の画面を示しています。</span></p>

<p><span class="merged" id="all.2uq967.1.spl1" title="原文 : Note that the UI shows the actual response from invoking the operation in the &quot;Server response&quot; section.">UIには、「サーバー・レスポンス」セクションの操作の起動による実際のレスポンスが表示されます。</span> <span class="merged" id="all.2uq967.1.spl2" title="原文 : The &quot;Responses&quot; section farther below describes the possible responses from the operation as declared in the OpenAPI document for the application.">次の「レスポンス」セクションでは、アプリケーションのOpenAPIドキュメントで宣言されている操作からのレスポンスについて説明します。</span> </p>


<div class="block-title"><span class="merged" id="all.qzOyR.3" title="原文 : Example OpenAPI UI Screen"><span>例OpenAPI UI画面</span></span></div>
<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="openapi uiスクリーンキャプチャグリーティングSE拡張" src="images/openapi-ui-screen-capture-greeting-se-expanded.png" /> </v-card-text> </v-card>


</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.26"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.2H6LX2.spl1" title="原文 : With the Helidon OpenAPI UI dependency in your pom.xml file, Helidon’s OpenAPI support automatically includes the default UI behavior, possibly modified by any UI settings you have in your configuration."><code>pom.xml</code>ファイルのHelidon OpenAPI UI依存関係により、HelidonのOpenAPIサポートにはデフォルトのUI動作が自動的に含まれ、構成内のUI設定によって変更される可能性があります。</span> <span class="merged" id="all.2H6LX2.spl2" title="原文 : You do not have to do anything else to enable the UI.">UIを有効にするために他の操作を行う必要はありません。</span> </p>


<h3 id="_creating_openapifeature_with_automatic_ui_behavior"><span class="merged" id="all.3T6825" title="原文 : Creating OpenApiFeature with Automatic UI Behavior">自動UI動作を使用した<code>OpenApiFeature</code>の作成</span></h3>
<div class="section">
<p><span class="merged" id="all.1UZP5t.spl1" title="原文 : Some applications explicitly create the OpenApiFeature object to tailor its behavior before registering it with the server.">一部のアプリケーションでは、<code>OpenApiFeature</code>オブジェクトを明示的に作成して、サーバーに登録する前にその動作を調整します。</span> <span class="merged" id="all.1UZP5t.spl2" title="原文 : If your pom.xml includes a dependency on the OpenAPI UI component, then any OpenApiFeature object your application builds prepares the default OpenAPI UI behavior, possibly modified as above by any UI settings you have in your configuration."><code>pom.xml</code>にOpenAPI UIコンポーネントへの依存関係が含まれている場合、アプリケーションで構築する<code>OpenApiFeature</code>オブジェクトでは、デフォルトのOpenAPI UI動作が準備されます。これは、構成内のUI設定によって前述のように変更される可能性があります。</span> </p>

<markup
lang="java"
title="Create <code>OpenApiFeature</code> with automatic UI"
>Config config = Config.create(); <span class="conum" data-value="1" />
Config.global(config);

WebServer server = WebServer.builder()
        .config(config.get("server"))
        .addFeature(OpenApiFeature.create(Config.global().get("openapi"))) <span class="conum" data-value="2" />
        .routing(Main::routing)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3q2Ug2" title="原文 : Load and set the global configuration.">グローバル構成をロードして設定します。</span></li>
<li data-value="2"><span class="merged" id="all.4VQMal" title="原文 : Add the OpenAPI feature to the server, configured using the openapi section of the configuration.">構成の<code>openapi</code>セクションを使用して構成された、OpenAPI機能をサーバーに追加します。</span></li>
</ul>

<p><span class="merged" id="all.3m8L8U" title="原文 : If your code invokes the OpenApiFeature.Builder config method, Helidon automatically applies the ui section of the openapi configuration to the UI.">コードで<code>OpenApiFeature.Builder</code> <code>config</code>メソッドを呼び出すと、Helidonは、<code>openapi</code>構成の<code>ui</code>セクションをUIに自動的に適用します。</span></p>

</div>


<h3 id="_customizing_the_ui_behavior"><span class="merged" id="all.2AZQQP" title="原文 : Customizing the UI Behavior">UI動作のカスタマイズ</span></h3>
<div class="section">
<p><span class="merged" id="all.3NuGsU" title="原文 : You can control some of the behavior of the UI programmatically in two steps:">UIのいくつかの動作は、次の2つのステップでプログラム的に制御できます:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4G8EW4" title="原文 : Create an OpenApiUi.Builder and invoke methods on it to set the UI behavior, then invoke the builder’s build method to create the OpenApiUi object."><a href="/apidocs/io.helidon.integrations.openapi.ui/io/helidon/integrations/openapi/ui/OpenApiUi.Builder.html" target="_blank"><code>OpenApiUi.Builder</code></a>を作成し、その上でメソッドを呼び出してUI動作を設定してから、ビルダーの<code>build</code>メソッドを呼び出して<code>OpenApiUi</code>オブジェクトを作成します。</span>

</li>
<li>
<span class="merged" id="all.1mdglS" title="原文 : Invoke the addService method on OpenApiFeature.Builder, passing the OpenApiUi object you prepared above."><a href="/apidocs/io.helidon.openapi/io.helidon.openapi.OpenApiFeature.Builder.html" target="_blank"><code>OpenApiFeature.Builder</code></a>で<code>addService</code>メソッドを起動し、前述で準備した<code>OpenApiUi</code>オブジェクトを渡します。</span>

</li>
</ol>

<p><span class="merged" id="all.3plMbf" title="原文 : The following example illustrates these steps, combining configuration with explicit programmatic settings.">次の例は、構成と明示的なプログラム設定を組み合せたこれらのステップを示しています。</span></p>

<markup
lang="java"
title="Create <code>OpenApiUi</code> and <code>OpenAPISupport</code> instances"
>Config config = Config.create(); <span class="conum" data-value="1" />
Config.global(config);

Config openApiConfig = Config.global().get("openapi"); <span class="conum" data-value="2" />
WebServer server = WebServer.builder()
        .config(config.get("server"))
        .addFeature(OpenApiFeature.builder() <span class="conum" data-value="3" />
                            .addService(OpenApiUi.builder() <span class="conum" data-value="4" />
                                                .webContext("my-ui") <span class="conum" data-value="5" />
                                                .config(openApiConfig.get("ui")) <span class="conum" data-value="6" />
                                                .build()) <span class="conum" data-value="7" />
                            .config(openApiConfig)
                            .build()) <span class="conum" data-value="8" />
        .routing(Main::routing)
        .build()
        .start();</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.d6hLQ" title="原文 : Load and set global configuration.">グローバル構成をロードおよび設定します。</span></li>
<li data-value="2"><span class="merged" id="all.Q2BRw" title="原文 : Extract the openapi config."><code>openapi</code>構成を抽出します。</span></li>
<li data-value="3"><span class="merged" id="all.2vKFQI" title="原文 : Begin setting up the OpenApiFeature builder."><code>OpenApiFeature</code>ビルダーの設定を開始します。</span></li>
<li data-value="4"><span class="merged" id="all.3fm5uU" title="原文 : Create the UI builder.">UIビルダーを作成します。</span></li>
<li data-value="5"><span class="merged" id="all.1OgU7C" title="原文 : Set UI behavior programmatically.">UIの動作をプログラムで設定します。</span></li>
<li data-value="6"><span class="merged" id="all.v4rKU" title="原文 : Set additional UI behavior based on UI configuration.">UI構成に基づいて追加のUI動作を設定します。</span></li>
<li data-value="7"><span class="merged" id="all.2jjevk" title="原文 : Build the OpenApiUi object."><code>OpenApiUi</code>オブジェクトをビルドします。</span></li>
<li data-value="8"><span class="merged" id="all.UMBE1" title="原文 : Build the OpenApiFeature object."><code>OpenApiFeature</code>オブジェクトをビルドします。</span></li>
</ul>

<p><span class="merged" id="all.3otbkH.spl1" title="原文 : The order in which your code invokes the methods on OpenApiUi.Builder and OpenApiFeature.Builder determines the outcome.">コードが<code>OpenApiUi.Builder</code>および<code>OpenApiFeature.Builder</code>でメソッドを呼び出す順序によって、結果が決まります。</span> <span class="merged" id="all.3otbkH.spl2" title="原文 : For instance, the example above adds the UI service to the OpenApiFeature.Builder before applying configuration to the OpenApiFeature.Builder.">たとえば、前述の例では、<code>OpenApiFeature.Builder</code>に構成を適用する<em>前に</em>、UIサービスを<code>OpenApiFeature.Builder</code>に追加します。</span> <span class="merged" id="all.3otbkH.spl3" title="原文 : If the configuration contains a setting for the UI’s web-context value, then the UI uses the configured value and not the programmatic value because your code applies the configuration later.">構成にUIの<code>web-context</code>値の設定が含まれている場合、コードは後で構成を適用するため、UIはプログラム的な値ではなく構成済の値を使用します。</span> <span class="merged" id="all.3otbkH.spl4" title="原文 : Your code should typically apply configuration after setting any values programmatically.">通常、コードは、値をプログラムで設定した<em>後に</em>構成を適用する必要があります。</span> <span class="merged" id="all.3otbkH.spl5" title="原文 : Doing so allows users or deployers of your service to set the behavior using configuration according to their particular needs which your code might not be able to anticipate.">これを行うと、コードが予測できない可能性のある特定のニーズに応じて、サービス・ユーザーまたはデプロイヤが構成を使用して動作を設定できます。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.17"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.28UKTv.spl1" title="原文 : The webContext(String) method on OpenApiUi.Builder sets the web context where the UI should respond instead of the default /openapi/ui."><code>OpenApiUi.Builder</code>の<code>webContext(String)</code>メソッドは、デフォルトの<code>/openapi/ui</code>のかわりにUIが応答するwebコンテキストを設定します。</span> <span class="merged" id="all.28UKTv.spl2" title="原文 : Helidon uses the provided string to set the entire web context for the UI, not as a suffix appended to the web context for the OpenAPISupport service.">Helidonは、指定された文字列を使用して、<code>OpenAPISupport</code>サービスのwebコンテキストに追加されたサフィクスとしてではなく、UIの<em>「全体」</em> webコンテキストを設定します。</span> </p>
</p>
</div>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.43"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4TW8eP" title="原文 : To use configuration to control how the Helidon OpenAPI UI service behaves, add an openapi.services.ui section to your configuration file, such as application.yaml.">構成を使用してHelidon OpenAPI UIサービスの動作を制御するには、<code>openapi.services.ui</code>セクションを構成ファイル(<code>application.yaml</code>など)に追加します。</span></p>

<p><span class="merged" id="all.4L1zZb.2" title="原文 : Type: io.helidon.integrations.openapi.ui.OpenApiUi">タイプ: <a href="/apidocs/io.helidon.integrations.openapi.ui/io/helidon/integrations/openapi/ui/OpenApiUi.html" target="_blank">io.helidon.integrations.openapi.ui.OpenApiUi</a></span></p>


<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.134"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.127" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.146"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.141"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.146"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.152"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.48UcwL.28"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.226"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.114"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4SXIcv.2" title="原文 : Sets whether the service should be enabled.">サービスを有効にするかどうかを設定します。</span></p>

<markup>@return `true` if enabled, `false` otherwise</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ueYs0.2"  title="原文: options"><code>options</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WdJek.9" title="原文 : Map&lt;string, string&gt;">マップ&lt;string, string></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3jJt7Q.2" title="原文 : Merges implementation-specific UI options.">実装固有のUIオプションをマージします。</span></p>

<markup>@return options for the UI to merge</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2C8nDO.9"  title="原文: web-context"><code>web-context</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.309"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2y0kt2.2" title="原文 : Full web context (not just the suffix).">完全なwebコンテキスト(サフィクスのみではありません)。</span></p>

<markup>@return full web context path</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.2qAkSV.1.spl1" title="原文 : The default UI web-context value is the web context for your OpenApiFeature service with the added suffix /ui.">デフォルトのUI <code>web-context</code>値は、サフィクス<code>/ui</code>が追加された<code>OpenApiFeature</code>サービスのwebコンテキストです。</span> <span class="merged" id="all.2qAkSV.1.spl2" title="原文 : If you use the default web context for both OpenApiFeature and the UI, the UI responds at /openapi/ui."><code>OpenApiFeature</code>とUIの両方でデフォルトのwebコンテキストを使用する場合、UIは<code>/openapi/ui</code>で応答します。</span> </p>

<p><span class="merged" id="all.s7dU0.1" title="原文 : You can use configuration to affect the UI path in two ways:">構成を使用して、次の2つの方法でUIパスに影響を与えることができます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.fTxlk.1" title="原文 : Configure the OpenAPI endpoint path (the /openapi part).">OpenAPIエンドポイント・パス(<code>/openapi</code>部分)を構成します。</span></p>
<p><span class="merged" id="all.1bkjKo" title="原文 : Recall that you can configure the Helidon OpenAPI component to change where it serves the OpenAPI document."><router-link :to="{path: '/se/openapi/openapi', hash: '#config'}">「Helidon OpenAPIコンポーネントを構成」</router-link>は、OpenAPIドキュメントの提供場所を変更できます。</span></p>

<markup
lang="yaml"
title="Configuring the OpenAPI web context"
>openapi:
  web-context: /my-openapi</markup>

<p><span class="merged" id="all.509Ub.1.spl1" title="原文 : In this case, the path for the UI component is your customized OpenAPI path with /ui as a suffix.">この場合、UIコンポーネントのパスは、サフィクスとして<code>/ui</code>を持つカスタマイズされたOpenAPIパスです。</span> <span class="merged" id="all.509Ub.1.spl2" title="原文 : With the example above, the UI responds at /my-openapi/ui and Helidon uses standard content negotiation at /my-openapi to return either the OpenAPI document or the UI.">前述の例では、UIは<code>/my-openapi/ui</code>で応答し、Helidonは<code>/my-openapi</code>の標準コンテンツ・ネゴシエーションを使用して、OpenAPIドキュメントまたはUIのいずれかを返します。</span> </p>

</li>
<li>
<p><span class="merged" id="all.45FcD0.1" title="原文 : Separately, configure the entire web context path for the UI independently from the web context for OpenAPI.">これとは別に、OpenAPIのwebコンテキストとは別に、UIのWebコンテキスト・パス全体を構成します。</span></p>
<markup
lang="yaml"
title="Configuring the OpenAPI UI web context"
>openapi:
  services:
    ui:
      web-context: /my-ui</markup>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.18"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3qf3Gw" title="原文 : The openapi.services.ui.web-context setting assigns the entire web-context for the UI, not the suffix appended to the OpenApiFeature endpoint."><code>openapi.services.ui.web-context</code>設定は、<code>OpenApiFeature</code>エンドポイントに追加されたサフィクスではなく、UIに<em>「全体」</em> webコンテキストを割り当てます。</span></p>
</p>
</div>

<p><span class="merged" id="all.JMhwN.1" title="原文 : With this configuration, the UI responds at /my-ui regardless of the path for OpenAPI itself.">この構成では、OpenAPI自体のパスに関係なく、UIは<code>/my-ui</code>で応答します。</span></p>

</li>
</ul>

<p><span class="merged" id="all.4GLfEm.spl1" title="原文 : The SmallRye OpenAPI UI component accepts several options, but they are of minimal use to application developers and they must be passed to the SmallRye UI code programmatically.">SmallRye OpenAPI UIコンポーネントは、いくつかのオプションを受け入れますが、アプリケーション開発者は最小限に使用でき、プログラムでSmallRye UIコードに渡す必要があります。</span> <span class="merged" id="all.4GLfEm.spl2" title="原文 : Helidon allows you to specify these values using configuration in the openapi.services.ui.options section.">Helidonでは、<code>openapi.services.ui.options</code>セクションの構成を使用してこれらの値を指定できます。</span> <span class="merged" id="all.4GLfEm.spl3" title="原文 : Helidon then passes the corresponding options to SmallRye for you.">Helidonは、対応するオプションをSmallRyeに渡します。</span> <span class="merged" id="all.4GLfEm.spl4" title="原文 : To configure any of these settings, use the enum values-​they are all lower case-​declared in the SmallRye Option.java class as the keys in your Helidon configuration.">これらの設定のいずれかを構成するには、列挙値(すべて小文字)をSmallRye <a href="https://github.com/smallrye/smallrye-open-api/tree/3.3.4/ui/open-api-ui/src/main/java/io/smallrye/openapi/ui/Option.java" target="_blank"><code>Option.java</code></a>クラスでHelidon構成のキーとして宣言します。</span> </p>

<div class="admonition note">
<p class="admonition-textlabel"><span class="merged" id="all.22fJPu.19"  title="原文:: Note">ノート</span></p>
<p ><p><span class="merged" id="all.3fwa9D.1.spl1" title="原文 : Helidon prepares several of the SmallRye options automatically based on other settings.">Helidonは、他の設定に基づいて、いくつかのSmallRyeオプションを自動的に準備します。</span> <span class="merged" id="all.3fwa9D.1.spl2" title="原文 : Any options you configure override the values Helidon assigns, possibly interfering with the proper operation of the UI.">構成するオプションは、Helidonによって割り当てられる値をオーバーライドし、UIの適切な動作を妨げる可能性があります。</span> </p>
</p>
</div>

</div>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.31"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.3XtzrY" title="原文 : Helidon OpenAPI SE documentation"><router-link to="/se/openapi/openapi">Helidon OpenAPI SEのドキュメント</router-link></span></p>

<p><span class="merged" id="all.W6xNp.1" title="原文 : SmallRye OpenAPI UI GitHub site"><a href="https://github.com/smallrye/smallrye-open-api/tree/3.3.4/ui/open-api-ui" target="_blank">SmallRye OpenAPI UI GitHubサイト</a></span></p>

</div>

</doc-view>
