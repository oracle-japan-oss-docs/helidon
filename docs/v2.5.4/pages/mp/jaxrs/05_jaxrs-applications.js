<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1bU7de.1"  title="原文:: JAX-RS Applications">JAX-RSアプリケーション</span></dt>
<dd slot="desc"><div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.71CLm.spl1" title="原文 : In this section we shall distinguish the notion of a JAX-RS Application subclass from a Helidon application.">この項では、JAX-RS <code>Application</code>サブクラスの概念をHelidonアプリケーションと区別します。</span> <span class="merged" id="all.71CLm.spl2" title="原文 : As we shall learn shortly, the latter may include zero or more of the former.">すぐに学習するように、後者は前者の0以上を含む可能性があります。</span> </p>
</div>
<p><span class="merged" id="all.4Eruwu.spl1" title="原文 : The JAX-RS specification defines the notion of an Application subclass whose methods return resource and provider classes, singletons and properties.">JAX-RS仕様では、メソッドがリソースおよびプロバイダ・クラス、シングルトンおよびプロパティを返す<code>Application</code>サブクラスの概念を定義します。</span> <span class="merged" id="all.4Eruwu.spl2" title="原文 : This is the mechanism developers can use to define what comprises a JAX-RS application.">これは、開発者がJAX-RSアプリケーションを構成する内容を定義するために使用できるメカニズムです。</span> <span class="merged" id="all.4Eruwu.spl3" title="原文 : Unless otherwise stated by the runtime environment in which the JAX-RS application runs, every JAX-RS application must include exactly one Application subclass.">JAX-RSアプリケーションが実行されるランタイム環境で特に記述されていないかぎり、すべてのJAX-RSアプリケーションに1つの<code>Application</code>サブクラスを含める必要があります。</span> </p>

<p><span class="merged" id="all.3XlSsP.spl1" title="原文 : Helidon provides an extension to JAX-RS in which 0 or more Application subclasses are allowed.">Helidonは、0つ以上の<code>Application</code>サブクラスが許可されるJAX-RSの拡張を提供します。</span> <span class="merged" id="all.3XlSsP.spl2" title="原文 : If no Application subclasses are provided, then a so-called synthetic subclass will be created automatically."><code>Application</code>サブクラスが指定されていない場合、いわゆる<em>「合成」</em>サブクラスが自動的に作成されます。</span> <span class="merged" id="all.3XlSsP.spl3" title="原文 : This synthetic subclass shall include all resource and provider classes discovered by Helidon.">この<em>「合成」</em>サブクラスには、Helidonで検出されたすべてのリソースおよびプロバイダ・クラスが含まれます。</span> <span class="merged" id="all.3XlSsP.spl4" title="原文 : Most Helidon applications should simply rely on this mechanism in accordance to convention over configuration practices.">ほとんどのHelidonアプリケーションは、構成慣行よりも規則に従ってこのメカニズムに依存する必要があります。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_discovery_of_jax_rs_beans"><span class="merged" id="all.1XaThf" title="原文 : Discovery of JAX-RS Beans">JAX-RS Beanの検出</span></h2>
<div class="section">
<p><span class="merged" id="all.2B9T4u.spl1" title="原文 : CDI scanning is controlled by the bean-discovery-mode attribute in beans.xml files - the default value for this attribute is annotated.">CDIスキャンは、<code>beans.xml</code>ファイルの<code>bean-discovery-mode</code>属性によって制御されます - この属性のデフォルト値は<code>annotated</code>です。</span> <span class="merged" id="all.2B9T4u.spl2" title="原文 : In the default mode, CDI scans for beans decorated by bean-defining annotations such as @ApplicationScoped, @RequestScoped, etc.">デフォルト・モードでは、<code>@ApplicationScoped</code>、<code>@RequestScoped</code>などのBean定義注釈によって装飾されたBeanのCDIスキャンを行います。</span> </p>

<p><span class="merged" id="all.2APmX5.spl1" title="原文 : With the help of CDI, Helidon looks for JAX-RS Application subclasses in your Helidon application.">CDIを使用すると、HelidonはHelidonアプリケーションのJAX-RS <code>Application</code>サブクラスを検索します。</span> <span class="merged" id="all.2APmX5.spl2" title="原文 : If none are found, a synthetic application will be created by gathering all resources and providers found during the discovery phase.">何も見つからない場合は、検出フェーズ中に見つかったすべてのリソースおよびプロバイダを収集して合成アプリケーションが作成されます。</span> <span class="merged" id="all.2APmX5.spl3" title="原文 : Note that if your Application subclass has no bean-defining annotations, and bean discovery is set to the default annotated value, it will be ignored."><code>Application</code>サブクラスにBean定義の注釈がなく、Bean検出がデフォルトの<code>annotated</code>値に設定されている場合は無視されます。</span> </p>

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
<p class="admonition-inline"><span class="merged" id="all.qagG3" title="原文 : Helidon treats @Path and @Provided as bean-definining annotations but, as stated above, Application subclasses may require additional annotations depending on the discovery mode.">Helidonは、<code>@Path</code>および<code>@Provided</code>をBean定義注釈として扱いますが、前述のように、<code>Application</code>サブクラスでは検出モードに応じて追加の注釈が必要になる場合があります。</span></p>
</div>
</div>

<h2 id="_access_to_application_instances"><span class="merged" id="all.1IHYB1" title="原文 : Access to Application Instances">アプリケーション・インスタンスにアクセス</span></h2>
<div class="section">
<p><span class="merged" id="all.30j8zq.spl1" title="原文 : JAX-RS provides access to the Application subclass instance via injection using @Context.">JAX-RSでは、<code>@Context</code>を使用して、インジェクションを介して<code>Application</code>サブクラス・インスタンスにアクセスできます。</span> <span class="merged" id="all.30j8zq.spl2" title="原文 : This form of access is still supported in Helidon but is insufficient if two or more subclasses are present.">この形式のアクセスは、Helidonでも引き続きサポートされますが、2つ以上のサブクラスが存在する場合は不十分です。</span> <span class="merged" id="all.30j8zq.spl3" title="原文 : Given that support for two or more Application subclasses is a Helidon extension, a new mechanism is provided via the ServerRequest &apos;s context object as shown next.">2つ以上の<code>Application</code>サブクラスのサポートがHelidon拡張であるため、次に示すように、<code>ServerRequest</code>のコンテキスト・オブジェクトを介して新しいメカニズムが提供されます。</span> </p>

<markup
lang="java"

>import io.helidon.webserver.ServerRequest;

@Path("myresource")
public class MyResource {

    @GET
    public void get(@Context ServerRequest serverRequest) {
        Application app = serverRequest.context().get(Application.class).get();
        // ...
    }
}</markup>

<p><span class="merged" id="all.3OuHGq" title="原文 : This approach effectively moves the scope of Application subclass instances to request scope in order to access the correct subclass for the resource method being executed.">このアプローチでは、<code>Application</code>サブクラス・インスタンスのスコープを、実行されているリソース・メソッドに適したサブクラスにアクセスするために、スコープをリクエストします。</span></p>

</div>

<h2 id="_injection_managers_in_helidon"><span class="merged" id="all.1JXPc0" title="原文 : Injection Managers in Helidon">Helidonのインジェクション・マネージャ</span></h2>
<div class="section">
<p><span class="merged" id="all.cI9bH.spl1" title="原文 : Jersey does not currently provide support for multiple Application subclasses.">Jerseyでは、現在、複数の<code>Application</code>サブクラスをサポートしていません。</span> <span class="merged" id="all.cI9bH.spl2" title="原文 : As a result, it creates a single internal injection manager for your entire application, but this is insufficient when multiple Application subclasses are present.">その結果、アプリケーション全体に対して単一の内部<em>「インジェクション・マネージャ」</em>が作成されますが、複数の<code>Application</code>サブクラスが存在する場合、これは不十分です。</span> <span class="merged" id="all.cI9bH.spl3" title="原文 : Helidon creates a separate injection manager for each Application subclass, and a single parent injection manager for your application.">Helidonは、<code>Application</code>サブクラスごとに個別のインジェクション・マネージャを作成し、アプリケーションに対して単一の親インジェクション・マネージャを作成します。</span> <span class="merged" id="all.cI9bH.spl4" title="原文 : Each Application subclass injection manager delegates to the parent injection manager.">各<code>Application</code>サブクラス・インジェクション・マネージャは、親インジェクション・マネージャに委任します。</span> </p>

<p><span class="merged" id="all.49Bbx5.spl1" title="原文 : Due to an implementation strategy in Jersey, ParamConverterProvider &apos;s must be registered in the parent manager for proper registration and initialization.">Jerseyの実装戦略により、適切な登録および初期化のために<code>ParamConverterProvider</code>を親マネージャに登録する必要があります。</span> <span class="merged" id="all.49Bbx5.spl2" title="原文 : Thus, providers of this type will be shared and accessible by all Application subclasses, even if your code tries to limit their access.">したがって、コードでアクセスを制限しようとした場合でも、このタイプのプロバイダは共有され、すべての<code>Application</code>サブクラスからアクセスできます。</span> <span class="merged" id="all.49Bbx5.spl3" title="原文 : This is likely to change in future versions of Jersey/Helidon and does not typically impact how your application runs.">これは、Jersey/Helidonの将来のバージョンで変更される可能性があり、通常、アプリケーションの実行方法には影響しません。</span> </p>

</div>
</doc-view>
