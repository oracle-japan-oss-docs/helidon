<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.Qdast" title="原文 : Extending Security">セキュリティの強化</span></dt>
<dd slot="desc"><p><span class="merged" id="all.25V0j5" title="原文 : This guide describes how you can extend the Security component.">このガイドでは、セキュリティ・コンポーネントを拡張する方法について説明します。</span></p>

<p><span class="merged" id="all.2BmP0" title="原文 : The component has the following extension points:">コンポーネントには、次の拡張ポイントがあります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3os64j"  title="原文:: Security providers">セキュリティ・プロバイダ</span></p>

</li>
<li>
<p><span class="merged" id="all.1YlJHi" title="原文 : Provider selection policy">プロバイダ選択ポリシー</span></p>

</li>
<li>
<p><span class="merged" id="all.1UA1wN" title="原文 : Integration with a framework">フレームワークとの統合</span></p>

</li>
</ul></dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_security_providers"><span class="merged" id="all.3os64j.1"  title="原文:: Security providers">セキュリティ・プロバイダ</span></h2>
<div class="section">
<p><span class="merged" id="all.259P2u.spl1" title="原文 : You can build a custom provider for each type of security concept supported.">サポートされているセキュリティ概念のタイプごとに、カスタム・プロバイダをビルドできます。</span> <span class="merged" id="all.259P2u.spl2" title="原文 : By default, each provider is asynchronous.">デフォルトでは、各プロバイダは非同期です。</span> <span class="merged" id="all.259P2u.spl3" title="原文 : For simple cases, a class exists in &quot;spi&quot; package to help implement a synchronous approach: SynchronousProvider.">単純なケースでは、同期アプローチの実装に役立つクラスがspiパッケージに存在: <code>SynchronousProvider</code>。</span> </p>

<p><span class="merged" id="all.3XqxXZ"  title="原文: You have two options:">次の2つのオプションがあります。</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.Q3v00" title="原文 : Implement a provider interface and reference it in configuration (or from builder) by class">プロバイダ・インタフェースを実装し、クラス別に構成(またはビルダー)で参照</span>

</li>
<li>
<span class="merged" id="all.1UdG7z" title="原文 : Implement a provider interface and provide a Java ServiceLoader service implementing io.helidon.security.spi.SecurityProviderService">プロバイダ・インタフェースを実装し、<code>io.helidon.security.spi.SecurityProviderService</code>を実装するJava <code>ServiceLoader</code>サービスを提供</span>

</li>
</ol>
<p><span class="merged" id="all.2tBCtz" title="原文 : The second option allows for easier configuration, as the configuration key can be used without a class definition and creates a default name of a provider.">2つ目のオプションでは、クラスを定義せずに構成キーを使用してプロバイダのデフォルト名を作成できるため、構成が容易になります。</span></p>


<h3 id="_authentication_provider"><span class="merged" id="all.1u7hlr"  title="原文:: Authentication provider">認証プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.2fV0c3.spl1" title="原文 : To create a custom authentication provider, create a class that implements io.helidon.security.spi.AuthenticationProvider.">カスタム認証プロバイダを作成するには、<code>io.helidon.security.spi.AuthenticationProvider</code>を実装するクラスを作成します。</span> <span class="merged" id="all.2fV0c3.spl2" title="原文 : Implementation is responsible for taking a request and asserting a subject based on that request.">実装は、リクエストを取得し、そのリクエストに基づいてサブジェクトをアサートします。</span> <span class="merged" id="all.2fV0c3.spl3" title="原文 : In case the protocol is multi-request (e.g. challenge for basic authentication), you have the possibility to return specific headers and a response code.">プロトコルがマルチ・リクエスト(basic認証のチャレンジなど)の場合、特定のヘッダーおよびレスポンス・コードを返す可能性があります。</span> <span class="merged" id="all.2fV0c3.spl4" title="原文 : The default semantics of these is HTTP, though providers may exist that are not HTTP specific.">これらのデフォルトのセマンティクスはHTTPですが、HTTP固有ではないプロバイダが存在する場合もあります。</span> </p>

</div>

<h3 id="_authorization_provider"><span class="merged" id="all.3EQrR1"  title="原文:: Authorization provider">認可プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.1pCERM.spl1" title="原文 : To create a custom authorization provider, create a class that implements io.helidon.security.spi.AuthorizationProvider.">カスタム認可プロバイダを作成するには、<code>io.helidon.security.spi.AuthorizationProvider</code>を実装するクラスを作成します。</span> <span class="merged" id="all.1pCERM.spl2" title="原文 : Implementation is responsible for taking a request and checking whether the request can continue processing (e.g. if the current user and/or service subject has a right to execute it).">実装は、リクエストを取得し、そのリクエストが処理を続行できるかどうか(たとえば、現在のユーザーまたはサービス・サブジェクト(あるいはその両方)に実行権限があるかどうか)をチェックします。</span> </p>

<p><span class="merged" id="all.1rIFOj" title="原文 : If authentication is configured, the Security component guarantees it resolved before authorization.">認証が構成されている場合、セキュリティ・コンポーネントにより、認可前に解決されることが保証されます。</span></p>

</div>

<h3 id="_outbound_security_provider"><span class="merged" id="all.BvVeA" title="原文 : Outbound security provider">アウトバウンド・セキュリティ・プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.7utjC.spl1" title="原文 : To create a custom outbound security provider, create a class that implements io.helidon.security.spi.OutboundSecurityProvider.">カスタム・アウトバウンド・セキュリティ・プロバイダを作成するには、<code>io.helidon.security.spi.OutboundSecurityProvider</code>を実装するクラスを作成します。</span> <span class="merged" id="all.7utjC.spl2" title="原文 : Implementation can update outgoing message headers to handle security for an outgoing request (e.g. identity propagation, mapping etc.).">実装では、送信メッセージ・ヘッダーを更新して、送信リクエスト(アイデンティティ伝播、マッピングなど)のセキュリティを処理できます。</span> </p>

</div>

<h3 id="_audit_provider"><span class="merged" id="all.b6anR" title="原文 : Audit provider">監査プロバイダ</span></h3>
<div class="section">
<p><span class="merged" id="all.3LHPCy.spl1" title="原文 : To create a custom audit provider, create a class that implements io.helidon.security.spi.AuditProvider.">カスタム監査プロバイダを作成するには、<code>io.helidon.security.spi.AuditProvider</code>を実装するクラスを作成します。</span> <span class="merged" id="all.3LHPCy.spl2" title="原文 : Security component feeds each audit provider all messages from all components that invoke audit method on &quot;Security&quot; class, including internal audit events pre-configured in the component itself (e.g. authentication, authorization events).">セキュリティ・コンポーネントは、コンポーネント自体で事前構成された内部監査イベント(認証、認可イベントなど)を含む、セキュリティ・クラスの監査メソッドを呼び出すすべてのコンポーネントからすべてのメッセージを各監査プロバイダに送ります。</span> </p>

<p><span class="merged" id="all.25g7Eu" title="原文 : Implementation may do whatever desired with these messages, e.g.:">実装では、次のように、これらのメッセージに対して必要な処理を行うことができます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3RN5lX" title="原文 : filter them">フィルタ</span></p>

</li>
<li>
<p><span class="merged" id="all.3Z5Qw7" title="原文 : log them">ログ</span></p>

</li>
<li>
<p><span class="merged" id="all.4bFxW5" title="原文 : store them to a database">データベースへの格納</span></p>

</li>
<li>
<p><span class="merged" id="all.2nO2lo" title="原文 : forward them to an audit component">監査コンポーネントへの転送</span></p>

</li>
<li>
<p><span class="merged" id="all.3VTe8i" title="原文 : discard them">破棄</span></p>

</li>
</ul>
</div>
</div>

<h2 id="_provider_selection_policy"><span class="merged" id="all.1YlJHi.1" title="原文 : Provider selection policy">プロバイダ選択ポリシー</span></h2>
<div class="section">
<p><span class="merged" id="all.2e6yLV.spl1" title="原文 : Each request is processed by a single authentication and/or authorization provider.">各リクエストは、単一の認証または認可プロバイダ(あるいはその両方)によって処理されます。</span> <span class="merged" id="all.2e6yLV.spl2" title="原文 : The selection policy provides the security component information about which provider to use.">選択ポリシーは、使用するプロバイダに関するセキュリティ・コンポーネント情報を提供します。</span> <span class="merged" id="all.2e6yLV.spl3" title="原文 : Out of the box, there are three policies:">初期状態では、次の3つのポリシーがあります:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1ur4ir" title="原文 : &quot;First&quot; policy - first configured provider (or explicitly defined default provider) is used by default, if a named provider is requested, it would be used">「最初」ポリシー - 最初に構成されたプロバイダ(または明示的に定義されたデフォルト・プロバイダ)がデフォルトで使用されます。名前付きプロバイダがリクエストされた場合は、それが使用されます</span>

</li>
<li>
<span class="merged" id="all.1UMEHi" title="原文 : &quot;Composite&quot; policy - this policy allows for a sequence of providers to be executed (e.g. one request may have more than one provider) - used for example to resolve service and user authentication">「コンポジット」ポリシー - このポリシーは、一連のプロバイダの実行を許可します(たとえば、1つのリクエストに複数のプロバイダがある場合があります) - たとえば、サービスおよびユーザー認証を解決するために使用されます</span>

</li>
<li>
<span class="merged" id="all.4RCUwz" title="原文 : &quot;Class&quot; policy - this allows usage of a custom policy defined by fully qualified class name">「クラス」ポリシー - これにより、完全修飾クラス名で定義されたカスタム・ポリシーを使用できます</span>

</li>
</ol>
<p><span class="merged" id="all.3EHPIQ" title="原文 : To create a custom provider selection policy, create a class that implements &quot;io.helidon.security.spi.ProviderSelectionPolicy&quot;.">カスタム・プロバイダ選択ポリシーを作成するには、io.helidon.security.spi.ProviderSelectionPolicyを実装するクラスを作成します。</span></p>

</div>

<h2 id="_framework_integration"><span class="merged" id="all.uc75x" title="原文 : Framework integration">フレームワーク統合</span></h2>
<div class="section">
<p><span class="merged" id="all.2ju2hR" title="原文 : The Security component supports integration with Helidon WebServer (helidon-security-integration-webserver) and with Jersey (helidon-security-integration-jersey).">セキュリティ・コンポーネントは、Helidon WebServer (<code>helidon-security-integration-webserver</code>)およびJersey (<code>helidon-security-integration-jersey</code>)との統合をサポートします。</span></p>

<p><span class="merged" id="all.39baq3" title="原文 : Existing integrations (WebServer and Jersey) use Helidon Security APIs that are available to integrate any framework/application (for example we could integrate security with messaging, such as JMS).">既存の統合(WebServerおよびJersey)では、任意のフレームワーク/アプリケーションの統合に使用できるHelidon Security APIを使用します(たとえば、JMSなどのメッセージングとセキュリティを統合できます)。</span></p>

<p><span class="merged" id="all.1Q4NwM.spl1" title="原文 : To create a new integration, an instance of Security class is needed, as it handles all configured providers.">新しい統合を作成するには、構成されているすべてのプロバイダを処理する<code>Security</code>クラスのインスタンスが必要です。</span> <span class="merged" id="all.1Q4NwM.spl2" title="原文 : Usually a single Security instance is used for an application.">通常、単一の<code>Security</code>インスタンスがアプリケーションに使用されます。</span> </p>

<p><span class="merged" id="all.1jfERp.spl1" title="原文 : Security is then used to create an instance of SecurityContext, which is used for interaction with a single user.">その後、<code>Security</code>を使用して、単一ユーザーとの対話に使用される<code>SecurityContext</code>のインスタンスを作成します。</span> <span class="merged" id="all.1jfERp.spl2" title="原文 : A single SecurityContext is created for each HTTP request in Jersey and WebServer integration.">JerseyとWebServerの統合では、HTTPリクエストごとに単一の<code>SecurityContext</code>が作成されます。</span> </p>

<p><span class="merged" id="all.2bwN0c" title="原文 : SecurityContext is used to invoke authentication, authorization, and outbound security requests."><code>SecurityContext</code>は、認証、認可およびアウトバウンド・セキュリティ・リクエストの呼出しに使用されます。</span></p>

<p><span class="merged" id="all.4DkiPr" title="原文 : Helidon Security also defines a set of annotations:">Helidonセキュリティでは、次の注釈のセットも定義されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2NGver" title="原文 : @Authenticated - access to resources must follow authentication rules defined by the annotation"><code>@Authenticated</code> - リソースへのアクセスは、注釈で定義された認証ルールに従う必要があります</span></p>

</li>
<li>
<p><span class="merged" id="all.oVnUn" title="原文 : @Authorized - access to resources must follow authorization rules defined by the annotation"><code>@Authorized</code> - リソースへのアクセスは、注釈で定義された認可ルールに従う必要があります</span></p>

</li>
<li>
<p><span class="merged" id="all.3JUMpL" title="原文 : @Audited - to configure auditing"><code>@Audited</code> - 監査の構成</span></p>

</li>
</ul>
<p><span class="merged" id="all.2xzWbO.spl1" title="原文 : If the protected resources (in Helidon MP, these are JAX-RS resource classes and methods) can be annotated, the integration component must use these annotations when deciding how to secure the endpoint.">保護されたリソース(Helidon MPではJAX-RSリソース・クラスおよびメソッド)に注釈を付けることができる場合、統合コンポーネントはエンドポイントの保護方法を決定する際にこれらの注釈を使用する必要があります。</span> <span class="merged" id="all.2xzWbO.spl2" title="原文 : For example, the Jersey integration checks whether the @Authenticated annotation exists.">たとえば、Jersey統合では、@Authenticated注釈が存在するかどうかが確認されます。</span> <span class="merged" id="all.2xzWbO.spl3" title="原文 : If it does, then the integration component attempts to authenticate the request.">その場合、統合コンポーネントはリクエストの認証を試行します。</span> </p>

<p><span class="merged" id="all.V0iGs" title="原文 : Because other components of Helidon Security (such as ABAC validators) query the request for annotations, the integration component should also collect all annotations from the resource and correctly configure them when creating the security request.">Helidon Securityの他のコンポーネント(ABACバリデータなど)は注釈のリクエストを問い合せるため、統合コンポーネントはリソースからすべての注釈を収集し、セキュリティ・リクエストの作成時に正しく構成する必要もあります。</span></p>

</div>
</doc-view>
