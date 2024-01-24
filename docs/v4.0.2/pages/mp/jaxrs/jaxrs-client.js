<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.13"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.12" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.9" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.5" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.8" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.9" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.6" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.6" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.12"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.3eeL6p.spl1" title="原文 : The Jakarta REST Client defines a programmatic API to access REST resources.">Jakarta RESTクライアントは、RESTリソースにアクセスするためのプログラム的なAPIを定義します。</span> <span class="merged" id="all.3eeL6p.spl2" title="原文 : This API sits at a higher level than traditional HTTP client APIs and provides full integration with server-side API concepts like providers.">このAPIは従来のHTTPクライアントAPIより高いレベルで配置され、プロバイダなどのサーバー側のAPIの概念との完全な統合を提供します。</span> <span class="merged" id="all.3eeL6p.spl3" title="原文 : It differs from the Rest Client API in that it does not support annotations or proxies, but instead uses builders and a fluent API to create and execute requests.">これは、注釈やプロキシをサポートしないが、かわりにビルダーと流暢なAPIを使用してリクエストを作成および実行するという点で、<router-link to="/mp/restclient">「RestクライアントAPI」</router-link>とは異なります。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.11"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1mdC2F" title="原文 : To enable Jakarta REST Client add the following dependency to your project’s pom.xml (see Managing Dependencies).">Jakarta RESTクライアントを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

> &lt;dependency&gt;
     &lt;groupId&gt;io.helidon.jersey&lt;/groupId&gt;
     &lt;artifactId&gt;helidon-jersey-client&lt;/artifactId&gt;
 &lt;/dependency&gt;</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.5"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.3rGVRc.spl1" title="原文 : Bootstrapping the API is done by obtaining an instance of Client.">APIのブートストラップは、<code>Client</code>のインスタンスを取得することによって行われます。</span> <span class="merged" id="all.3rGVRc.spl2" title="原文 : A single instance of this class can be used to create multiple service requests that share the same basic configuration, e.g., the same set of providers.">このクラスの単一インスタンスを使用して、同じ基本構成、(たとえば、同じ<em>「プロバイダ」</em>セット)を共有する複数のサービス・リクエストを作成できます。</span> <span class="merged" id="all.3rGVRc.spl3" title="原文 : More precisely, from a Client we can create multiple WebTarget s, and in turn, from each WebTarget we can create multiple Invocation s.">さらに正確には、<code>Client</code>から複数の<code>WebTarget</code>を作成し、各<code>WebTarget</code>から複数の<code>Invocation</code>を作成できます。</span> </p>

<markup
lang="java"

>Client client = ClientBuilder.newClient();
Response res = client
    .target("http://localhost:8080/greet")
    .request("text/plain")
    .get();</markup>

<p><span class="merged" id="all.1V4Yb6" title="原文 : In the snippet above, the call to target returns a WebTarget, and the call to request returns an Invocation.Builder; finally, the call to get returns the Response that results from accessing the remote resource.">上のスニペットでは、<code>target</code>へのコールは<code>WebTarget</code>を返し、<code>request</code>へのコールは<code>Invocation.Builder</code>を返します。最後に、<code>get</code>へのコールは、リモート・リソースへのアクセスによって生じる<code>Response</code>を返します。</span></p>

<p><span class="merged" id="all.42qHPk" title="原文 : Given that this API is fully integrated with message body readers and writers, it is possible to request the response body be provided after conversion to a Java type - such as a String in the example below.">このAPIはメッセージ本文のリーダーおよびライターと完全に統合されているため、次の例の<code>String</code>など、Java型への変換後にレスポンス本文を提供するようにリクエストできます。</span></p>

<markup
lang="java"

>Client client = ClientBuilder.newClient();
String res = client
    .target("http://localhost:8080/greet")
    .request("text/plain")
    .get(String.class);</markup>

<p><span class="merged" id="all.8jZzo" title="原文 : Alternatively, there are also methods in Response that can trigger similar conversions.">または、<code>Response</code>に同様の変換をトリガーできるメソッドもあります。</span></p>

<p><span class="merged" id="all.4Lq3kw.spl1" title="原文 : Configuration can be specified at the Client or WebTarget level, as both types implement Configurable&lt;T&gt;.">両方のタイプが<code>Configurable&lt;T></code>を実装するため、構成は<code>Client</code>レベルまたは<code>WebTarget</code>レベルで指定できます。</span> <span class="merged" id="all.4Lq3kw.spl2" title="原文 : This enables common configuration to be inherited by a WebTarget created from a Client instance.">これにより、<code>Client</code>インスタンスから作成された<code>WebTarget</code>によって共通構成を継承できます。</span> <span class="merged" id="all.4Lq3kw.spl3" title="原文 : In either case, several register methods can be used to configure providers such as filters and exception mappers.">どちらの場合も、複数の<code>register</code>メソッドを使用して、フィルタや例外マッパーなどのプロバイダを構成できます。</span> </p>

<markup
lang="java"

>Client client = ClientBuilder.newClient();
client.register(GreetFilter.class);
String res = client
    .target("http://localhost:8080/greet")
    .register(GreetExceptionMapper.class)
    .request("text/plain")
    .get(String.class);</markup>

<p><span class="merged" id="all.3R3lPk.spl1" title="原文 : The example above shows registration of GreetFilter.class for all targets and registration of GreetExceptionMapper.class for just one of them.">前述の例は、すべてのターゲットに対する<code>GreetFilter.class</code>の登録、およびそれらの1つのみに対する<code>GreetExceptionMapper.class</code>の登録を示しています。</span> <span class="merged" id="all.3R3lPk.spl2" title="原文 : The same logic applies to other types of configuration such as properties and features.">同じロジックは、プロパティや機能などの他のタイプの構成に適用されます。</span> </p>

<p><span class="merged" id="all.14lXgN.spl1" title="原文 : The Jakarta REST Client API has support for asynchronous invocations.">Jakarta RESTクライアントAPIでは、非同期呼出しがサポートされています。</span> <span class="merged" id="all.14lXgN.spl2" title="原文 : Accessing a resource asynchronously prevents the calling thread from blocking for the duration of the call.">リソースに非同期的にアクセスすると、呼び出し中のスレッドがブロックされなくなります。</span> <span class="merged" id="all.14lXgN.spl3" title="原文 : By default, all invocations are synchronous but can be turned into either asynchronous or reactive calls by simply inserting the corresponding fluent method call during the creation phase.">デフォルトでは、すべての呼出しは<em>「同期」</em>ですが、作成フェーズ中に対応する流暢メソッド・コールを挿入するだけで、非同期コールまたはリアクティブ・コールに変換できます。</span> </p>

<p><span class="merged" id="all.2CW7JB" title="原文 : Using Future:"><code>Future</code>の使用:</span></p>

<markup
lang="java"

>Client client = ClientBuilder.newClient();
Future&lt;String&gt; res = client
    .target("http://localhost:8080/greet")
    .request("text/plain")
    .async()        // now asynchronous
    .get(String.class);</markup>

<p><span class="merged" id="all.171DTp" title="原文 : Or using a more modern, reactive style:">あるいは、より現代的でリアクティブなスタイルを使用します:</span></p>

<markup
lang="java"

>Client client = ClientBuilder.newClient();
CompletionStage&lt;String&gt; res = client
    .target("http://localhost:8080/greet")
    .request("text/plain")
    .rx()           // now reactive
    .get(String.class);</markup>

<p><span class="merged" id="all.3hBbWx" title="原文 : In either case, the implementation will ensure the calling thread is not blocked and that the result from the invocation is available upon request or via a callback mechanism.">いずれの場合も、実装では、コール元のスレッドがブロックされていないこと、および呼出しの結果がリクエスト時またはコールバック・メカニズムを介して使用可能であることを確認します。</span></p>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.9"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4dTMVz" title="原文 : Configuration for this API is all done programmatically as shown in the previous sections.">このAPIの構成はすべて、前の項に示すようにプログラム的に行われます。</span></p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.9"  title="原文:: Examples">例</span></h2>
<div class="section">
<p><span class="merged" id="all.tvWLq.spl1" title="原文 : See for same simple examples.">同じ簡単な例については、<router-link @click.native="this.scrollFix('#_api')" to="#_api"></router-link>を参照してください。</span> <span class="merged" id="all.tvWLq.spl2" title="原文 : For additional information, refer to the">詳細については、</span> </p>

<p><span class="merged" id="all.U4o2o" title="原文 : Jakarta REST Client Specification."><a href="https://jakarta.ee/specifications/restful-ws/3.1.0/jakarta-restful-ws-spec-3.1.0.html#client_api" target="_blank">「Jakarta RESTクライアント仕様」</a>。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.7"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.1ER03c.1" title="原文 : For additional information, see the Jakarta REST Javadocs.">詳細は、<a href="https://jakarta.ee/specifications/restful-ws/3.1.0/apidocs" target="_blank">Jakarta REST Javadocs</a>を参照してください。</span></p>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.6"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.34yWq4.1" title="原文 : Jakarta REST Client Specification"><a href="https://jakarta.ee/specifications/restful-ws/3.1.0/jakarta-restful-ws-spec-3.1.0.html#client_api" target="_blank">Jakarta RESTクライアント仕様</a></span></p>

</li>
</ul>

</div>

</doc-view>
