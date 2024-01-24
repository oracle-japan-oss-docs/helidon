<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_jakarta_rest_applications"><span class="merged" id="all.26ovjP" title="原文 : Jakarta REST Applications">Jakarta RESTアプリケーション</span></h2>
<div class="section">
<p><span class="merged" id="all.3YDhPi.spl1" title="原文 : The Jakarta REST specification (formerly JAX-RS) defines the notion of an Application subclass whose methods return resource and provider classes, singletons and properties.">Jakarta REST仕様(以前のJAX-RS)は、メソッドがリソースおよびプロバイダ・クラス、シングルトンおよびプロパティを返す<code>Application</code>サブクラスの概念を定義します。</span> <span class="merged" id="all.3YDhPi.spl2" title="原文 : This is the mechanism developers can use to define what comprises a REST application.">これは、開発者がRESTアプリケーションを構成する要素を定義するために使用できるメカニズムです。</span> <span class="merged" id="all.3YDhPi.spl3" title="原文 : Unless otherwise stated by the runtime environment in which the application runs, every REST application must include exactly one Application subclass.">アプリケーションが実行されるランタイム環境によって特に明記されていないかぎり、すべてのRESTアプリケーションには、1つの<code>Application</code>サブクラスを含める必要があります。</span> </p>

<p><span class="merged" id="all.pFuKi.spl1" title="原文 : Helidon provides an extension to Jakarta REST in which 0 or more Application subclasses are allowed.">Helidonは、0個以上の<code>Application</code>サブクラスが許可されるJakarta RESTの拡張を提供します。</span> <span class="merged" id="all.pFuKi.spl2" title="原文 : If no Application subclasses are provided, then a so-called synthetic subclass will be created automatically."><code>Application</code>サブクラスが指定されていない場合、いわゆる<em>「合成」</em>サブクラスが自動的に作成されます。</span> <span class="merged" id="all.pFuKi.spl3" title="原文 : This synthetic subclass shall include all resource and provider classes discovered by Helidon.">この<em>「合成」</em>サブクラスには、Helidonで検出されたすべてのリソースおよびプロバイダ・クラスが含まれます。</span> <span class="merged" id="all.pFuKi.spl4" title="原文 : Most Helidon applications should simply rely on this mechanism in accordance to convention over configuration practices.">ほとんどのHelidonアプリケーションは、構成慣行よりも規則に従ってこのメカニズムに依存する必要があります。</span> </p>

</div>


<h2 id="_discovery_of_rest_beans"><span class="merged" id="all.40BFT6" title="原文 : Discovery of REST Beans">REST Beanの検出</span></h2>
<div class="section">
<p><span class="merged" id="all.2B9T4u.spl1" title="原文 : CDI scanning is controlled by the bean-discovery-mode attribute in beans.xml files - the default value for this attribute is annotated.">CDIスキャンは、<code>beans.xml</code>ファイルの<code>bean-discovery-mode</code>属性によって制御されます - この属性のデフォルト値は<code>annotated</code>です。</span> <span class="merged" id="all.2B9T4u.spl2" title="原文 : In the default mode, CDI scans for beans decorated by bean-defining annotations such as @ApplicationScoped, @RequestScoped, etc.">デフォルト・モードでは、<code>@ApplicationScoped</code>、<code>@RequestScoped</code>などのBean定義注釈によって装飾されたBeanのCDIスキャンを行います。</span> </p>

<p><span class="merged" id="all.1xHs51.spl1" title="原文 : With the help of CDI, Helidon looks for REST Application subclasses in your Helidon application.">CDIを使用すると、Helidonは、HelidonアプリケーションでREST <code>Application</code>サブクラスを検索します。</span> <span class="merged" id="all.1xHs51.spl2" title="原文 : If none are found, a synthetic application will be created by gathering all resources and providers found during the discovery phase.">何も見つからない場合は、検出フェーズ中に見つかったすべてのリソースおよびプロバイダを収集して合成アプリケーションが作成されます。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1u3fEZ" title="原文 : If an Application subclass has no bean-defining annotations, and bean discovery is set to the default annotated value, it will be ignored."><code>Application</code>サブクラスにBean定義の注釈がなく、Bean検出がデフォルトの<code>annotated</code>値に設定されている場合、それは無視されます。</span></p>
</div>

<p><span class="merged" id="all.4Tqrqa" title="原文 : The discovery phase is carried out as follows (in no particular order):">検出フェーズは次のように実行されます(特定の順序はありません):</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.24xDQp" title="原文 : Collect all beans that extend Application"><code>Application</code>を拡張するすべてのBeanを収集</span>

</li>
<li>
<span class="merged" id="all.1zYmz4" title="原文 : Collect all beans annotated with @Path"><code>@Path</code>で注釈が付けられたすべてのBeanを収集</span>

</li>
<li>
<span class="merged" id="all.4gAjX6" title="原文 : Collect all beans annotated with @Provider"><code>@Provider</code>で注釈が付けられたすべてのBeanを収集</span>

</li>
</ol>

<p><span class="merged" id="all.UgKHc.spl1" title="原文 : If no Application subclasses are found, create a synthetic Application subclass that includes all beans gathered in steps (2) and (3) and set the application path to be &quot;/&quot; -this is the path normally defined using the @ApplicationPath annotation."><code>Application</code>サブクラスが見つからない場合は、ステップ(2)および(3)で収集されたすべてのBeanを含む<em>「合成」</em><code>Application</code>サブクラスを作成し、アプリケーション・パスを"/"に設定します。これは通常、<code>@ApplicationPath</code>注釈を使用して定義されるパスです。</span> <span class="merged" id="all.UgKHc.spl2" title="原文 : If one or more Application subclasses are found, call the getClasses and getSingletons methods in each subclass using the collections in steps (2) and (3) only as defaults, i.e. if these methods both return empty sets.">1つ以上の<code>Application</code>サブクラスが見つかった場合は、デフォルトとしてステップ(2)と(3)のコレクションを使用して各サブクラスで<code>getClasses</code>メソッドと<code>getSingletons</code>メソッドをコールします。つまり、これらのメソッドの両方が空のセットを返す場合です。</span> </p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.3FAzIZ" title="原文 : Helidon treats @Path and @Provided as bean-defining annotations but, as stated above, Application subclasses may require additional annotations depending on the discovery mode.">Helidonは、<code>@Path</code>および<code>@Provided</code>をBean定義の注釈として扱いますが、前述のように、<code>Application</code>サブクラスでは検出モードに応じて追加の注釈が必要になる場合があります。</span></p>
</div>

</div>


<h2 id="_access_to_application_instances"><span class="merged" id="all.1IHYB1" title="原文 : Access to Application Instances">アプリケーション・インスタンスにアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.3Blgsn.spl1" title="原文 : Jakarta REST provides access to the Application subclass instance via injection using @Context.">Jakarta RESTでは、<code>@Context</code>を使用して、インジェクションを介して<code>Application</code>サブクラス・インスタンスにアクセスできます。</span> <span class="merged" id="all.3Blgsn.spl2" title="原文 : This form of access is still supported in Helidon but this is not enough if two or more subclasses are present.">この形式のアクセスは、引き続きHelidonでサポートされますが、2つ以上のサブクラスが存在する場合には不十分です。</span> <span class="merged" id="all.3Blgsn.spl3" title="原文 : Given that support for two or more Application subclasses is a Helidon extension, a new mechanism is provided via the ServerRequest &apos;s context object as shown next.">2つ以上の<code>Application</code>サブクラスのサポートがHelidon拡張であるため、次に示すように、<code>ServerRequest</code>のコンテキスト・オブジェクトを介して新しいメカニズムが提供されます。</span> </p>

<markup
lang="java"

>import io.helidon.webserver.ServerRequest;

@Path("myresource")
public class MyResource {

    @GET
    public void get(@Context ServerRequest serverRequest) {
        Application app = serverRequest.context().get(Application.class).get();
    }
}</markup>

<p><span class="merged" id="all.3OuHGq" title="原文 : This approach effectively moves the scope of Application subclass instances to request scope in order to access the correct subclass for the resource method being executed.">このアプローチでは、<code>Application</code>サブクラス・インスタンスのスコープを、実行されているリソース・メソッドに適したサブクラスにアクセスするために、スコープをリクエストします。</span></p>

</div>


<h2 id="_injection_managers_in_helidon"><span class="merged" id="all.1JXPc0" title="原文 : Injection Managers in Helidon">Helidonのインジェクション・マネージャ</span></h2>
<div class="section">
<p><span class="merged" id="all.2DgKJP.spl1" title="原文 : The Oracle implementation of Jakarta REST, known as Jersey, does not currently provide support for multiple Application subclasses.">Jerseyと呼ばれるJakarta RESTのOracle実装は、現在、複数の<code>Application</code>サブクラスのサポートを提供していません。</span> <span class="merged" id="all.2DgKJP.spl2" title="原文 : As a result, it creates a single internal injection manager for your entire application, but this is insufficient when multiple Application subclasses are present.">その結果、アプリケーション全体に対して単一の内部<em>「インジェクション・マネージャ」</em>が作成されますが、複数の<code>Application</code>サブクラスが存在する場合、これは不十分です。</span> <span class="merged" id="all.2DgKJP.spl3" title="原文 : Helidon creates a separate injection manager for each Application subclass, and a single parent injection manager for your application.">Helidonは、<code>Application</code>サブクラスごとに個別のインジェクション・マネージャを作成し、アプリケーションに対して単一の親インジェクション・マネージャを作成します。</span> <span class="merged" id="all.2DgKJP.spl4" title="原文 : Each Application subclass injection manager delegates to the parent injection manager.">各<code>Application</code>サブクラス・インジェクション・マネージャは、親インジェクション・マネージャに委任します。</span> </p>

<p><span class="merged" id="all.49Bbx5.spl1" title="原文 : Due to an implementation strategy in Jersey, ParamConverterProvider &apos;s must be registered in the parent manager for proper registration and initialization.">Jerseyの実装戦略により、適切な登録および初期化のために<code>ParamConverterProvider</code>を親マネージャに登録する必要があります。</span> <span class="merged" id="all.49Bbx5.spl2" title="原文 : Thus, providers of this type will be shared and accessible by all Application subclasses, even if your code tries to limit their access.">したがって、コードでアクセスを制限しようとした場合でも、このタイプのプロバイダは共有され、すべての<code>Application</code>サブクラスからアクセスできます。</span> <span class="merged" id="all.49Bbx5.spl3" title="原文 : This is likely to change in future versions of Jersey/Helidon and does not typically impact how your application runs.">これは、Jersey/Helidonの将来のバージョンで変更される可能性があり、通常、アプリケーションの実行方法には影響しません。</span> </p>

</div>

</doc-view>
