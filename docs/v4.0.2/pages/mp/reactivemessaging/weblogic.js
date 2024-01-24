<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.29"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.27" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.22" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.20" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.18" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.36"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1K5snm.spl1" title="原文 : WebLogic JMS Connector extends Helidon JMS connector with special handling for legacy WebLogic T3 thin clients.">WebLogic JMSコネクタは、レガシーのWebLogic T3シン・クライアントに対して特別な処理を行うHelidon JMSコネクタを拡張します。</span> <span class="merged" id="all.1K5snm.spl2" title="原文 : Legacy versions of thin client can be found in server/lib directory(WL_HOME/server/lib/wlthint3client.jar) of any WebLogic Server installation.">シン・クライアントのレガシー・バージョンは、任意のWebLogic Serverインストールのserver/lib directory(<code>WL_HOME/server/lib/wlthint3client.jar</code>)にあります。</span> </p>

<p><span class="merged" id="all.1k8e2M.spl1" title="原文 : Helidon supports Jakarta EE {version-lib-jakarta-ee}.">Helidonは、Jakarta EE {version-lib-jakarta-ee}をサポートしています。</span> <span class="merged" id="all.1k8e2M.spl2" title="原文 : Legacy versions of javax based thin T3 client will not work correctly when added to the classpath.">レガシー・バージョンの<code>javax</code>ベースのシンT3クライアントは、クラスパスに追加すると正しく動作しません。</span> <span class="merged" id="all.1k8e2M.spl3" title="原文 : Legacy thin T3 clients must be loaded from a filesystem location specified by the thin-jar property.">従来のシンT3クライアントは、<code>thin-jar</code>プロパティで指定されたファイル・システムのロケーションからロードする必要があります。</span> </p>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.3nWnwA.spl1" title="原文 : Do not place legacy wlthint3client.jar on the Helidon classpath.">従来の<code>wlthint3client.jar</code>をHelidonクラスパスに配置しないでください。</span> <span class="merged" id="all.3nWnwA.spl2" title="原文 : The client library location needs to be configured and loaded by the Helidon messaging connector.">クライアント・ライブラリのロケーションは、Helidonメッセージング・コネクタによって構成およびロードされる必要があります。</span> </p>
</div>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.3tzDql" title="原文 : When using the legacy WebLogic T3 thin clients, make sure to start the Helidon application with --add-opens=java.base/java.io=ALL-UNNAMED to allow reflection with the legacy wlthint3client.">レガシーのWebLogic T3シン・クライアントを使用する場合は、必ずHelidonアプリケーションを<code>--add-opens=java.base/java.io=ALL-UNNAMED</code>で起動して、レガシーのwlthint3clientでのリフレクションを許可してください。</span></p>
</div>

<p><span class="merged" id="all.bunav.spl1" title="原文 : Updated versions of thin T3 clients that are compatible with modern Jakarta runtimes can be downloaded from {osdc-link} as wlthint3client.jakarta.">最新のJakartaランタイムと互換性のあるシンT3クライアントの更新バージョンは、 {osdc-link} から<code>wlthint3client.jakarta</code>としてダウンロードできます。</span> <span class="merged" id="all.bunav.spl2" title="原文 : However, Jakarta based thin clients can be placed on the Helidon classpath and used with this specialized connector or the JMS connector After the download, the thin T3 client artefact needs to be installed in the Maven repository accessible from the application build.">ただし、Jakartaベースのシン・クライアントは、Helidonクラスパスに配置し、この専用コネクタまたは<router-link to="/mp/reactivemessaging/jms">「JMSコネクタ」</router-link>とともに使用できます。ダウンロード後、シンT3クライアント・アーティファクトを、アプリケーション・ビルドからアクセス可能なMavenリポジトリにインストールする必要があります。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.25"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1iRgPA" title="原文 : To enable WebLogic JMS connector add the following dependency to your project’s pom.xml (see Managing Dependencies).">WebLogic JMSコネクタを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照してください)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.wls-jms&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-wls-jms&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.24"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.1vLKH4" title="原文 : Connector name: helidon-weblogic-jms">コネクタ名: <code>helidon-weblogic-jms</code></span></p>

<div class="block-title"><span class="merged" id="all.x2f9G.2"  title="原文:: Attributes"><span>属性</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4dd7Nl"  title="原文: jms-factory"><code>jms-factory</code></span></td>
<td class=""><span class="merged" id="all.1NfUmx" title="原文 : The JNDI name of the JMS factory configured in WebLogic.">WebLogicで構成されたJMSファクトリのJNDI名。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3kDdAI.1"  title="原文: url"><code>url</code></span></td>
<td class=""><span class="merged" id="all.1PVVyS" title="原文 : t3, t3s, or http address of WebLogic Server.">WebLogic Serverのt3、t3sまたはhttpアドレス。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1kx0Yy"  title="原文: thin-jar"><code>thin-jar</code></span></td>
<td class=""><span class="merged" id="all.4Kn8c2.spl1" title="原文 : Filepath to the WebLogic thin T3 client jar (wlthint3client.jar); this path can be usually found within the WebLogic Server installation.">WebLogicシンT3クライアントjar (<code>wlthint3client.jar</code>)へのファイル・パス。このパスは通常、WebLogic Serverインストール内にあります。</span> <span class="merged" id="all.4Kn8c2.spl2"  title="原文: WL_HOME/server/lib/wlthint3client.jar"><code>WL_HOME/server/lib/wlthint3client.jar</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2RoTn7"  title="原文: principal"><code>principal</code></span></td>
<td class=""><span class="merged" id="all.CDMkl" title="原文 : The WebLogic initial context principal (user).">WebLogic初期コンテキスト・プリンシパル(ユーザー)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.23TA5B"  title="原文: credentials"><code>credentials</code></span></td>
<td class=""><span class="merged" id="all.1bl3aU" title="原文 : The WebLogic initial context credential (password)">WebLogic初期コンテキスト資格証明(パスワード)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2SYAnU.4"  title="原文: type"><code>type</code></span></td>
<td class=""><span class="merged" id="all.3RGTEd.spl1" title="原文 : The possible values are: queue, topic.">使用可能な値は次のとおりです: <code>queue</code>, <code>topic</code>.</span> <span class="merged" id="all.3RGTEd.spl2" title="原文 : Default value is: topic">デフォルト値は次のとおりです: <code>topic</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Cba7M.2"  title="原文: destination"><code>destination</code></span></td>
<td class=""><span class="merged" id="all.27txLT" title="原文 : The queue or topic name in WebLogic CDI (Create Destination Identifier) Syntax.">WebLogic CDI (宛先識別子の作成)構文のキューまたはトピック名。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3LTIMx.1"  title="原文: jndi.destination"><code>jndi.destination</code></span></td>
<td class=""><span class="merged" id="all.4YTYOv.spl1" title="原文 : JNDI destination identifier.">JNDI宛先識別子。</span> <span class="merged" id="all.4YTYOv.spl2" title="原文 : When no such JNDI destination is found, falls back to destination with CDI syntax.">そのようなJNDI宛先が見つからない場合は、CDI構文を使用して<code>destination</code>に戻ります。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1SCUeZ.2"  title="原文: acknowledge-mode"><code>acknowledge-mode</code></span></td>
<td class=""><span class="merged" id="all.3pbSIr.spl1" title="原文 : The possible values are: AUTO_ACKNOWLEDGE- session automatically acknowledges a client’s receipt of a message, CLIENT_ACKNOWLEDGE - receipt of a message is acknowledged only when Message.ack() is called manually, DUPS_OK_ACKNOWLEDGE - session lazily acknowledges the delivery of messages.">使用可能な値は次のとおりです: <code>AUTO_ACKNOWLEDGE</code> - セッションは、クライアントのメッセージ受信(<code>CLIENT_ACKNOWLEDGE</code>)を自動的に確認 - メッセージの受信は、<code>Message.ack()</code>が手動でコールされた場合にのみ確認されます。<code>DUPS_OK_ACKNOWLEDGE</code> - sessionは、メッセージの配信を遅延確認します。</span> <span class="merged" id="all.3pbSIr.spl2" title="原文 : Default value: AUTO_ACKNOWLEDGE">デフォルト値: <code>AUTO_ACKNOWLEDGE</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4aBMur.2"  title="原文: transacted"><code>transacted</code></span></td>
<td class=""><span class="merged" id="all.3B1tjp.2.spl1" title="原文 : Indicates whether the session will use a local transaction.">セッションがローカル・トランザクションを使用するかどうかを示します。</span> <span class="merged" id="all.3B1tjp.2.spl2"  title="原文:: Default value: false">デフォルト値: <code>false</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28rkos.2"  title="原文: message-selector"><code>message-selector</code></span></td>
<td class=""><span class="merged" id="all.2l8PxJ.spl1" title="原文 : The JMS API message selector expression based on a subset of the SQL92.">SQL92のサブセットに基づくJMS APIメッセージ・セレクタ式。</span> <span class="merged" id="all.2l8PxJ.spl2" title="原文 : Expression can access only headers and properties, not the payload.">式はヘッダーおよびプロパティのみにアクセスでき、ペイロードにはアクセスできません。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.41Kf4l.7"  title="原文: client-id"><code>client-id</code></span></td>
<td class=""><span class="merged" id="all.3vBL2X" title="原文 : The client identifier for JMS connection.">JMS接続のクライアント識別子です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3HodGX.2"  title="原文: durable"><code>durable</code></span></td>
<td class=""><span class="merged" id="all.22wasS.2.spl1" title="原文 : True for creating durable consumer (only for topic).">永続コンシューマを作成する場合はtrue (トピックの場合のみ)。</span> <span class="merged" id="all.22wasS.2.spl2"  title="原文:: Default value: false">デフォルト値: <code>false</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4VYCo3.2"  title="原文: subscriber-name"><code>subscriber-name</code></span></td>
<td class=""><span class="merged" id="all.3lIICT" title="原文 : The subscriber name for the durable consumer used to identify subscription.">サブスクリプションの識別に使用される永続コンシューマのサブスクライバ名。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3fQfsR.2"  title="原文: non-local"><code>non-local</code></span></td>
<td class=""><span class="merged" id="all.3ZxZb5.spl1" title="原文 : If true then any message that is published to the topic using this session’s connection or any other connection with the same client identifier, will not be added to the durable subscription."><code>true</code>の場合、このセッションの接続または同じクライアント識別子を持つ他の接続を使用してトピックにパブリッシュされるメッセージは、永続サブスクリプションには追加されません。</span> <span class="merged" id="all.3ZxZb5.spl2"  title="原文:: Default value: false">デフォルト値: <code>false</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.12Z8gJ.2"  title="原文: named-factory"><code>named-factory</code></span></td>
<td class=""><span class="merged" id="all.7x8B5.2" title="原文 : Select in case factory is injected as a named bean or configured with name.">ファクトリが名前付きBeanとしてインジェクトされる場合、または名前で構成される場合に選択します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3RfDpa.2"  title="原文: poll-timeout"><code>poll-timeout</code></span></td>
<td class=""><span class="merged" id="all.4UVxLy.spl1" title="原文 : The timeout interval (in millis) for polling for the next message in every poll cycle.">各ポーリング・サイクルにおける次のメッセージのポーリングに対するタイムアウト間隔(ミリ秒)。</span> <span class="merged" id="all.4UVxLy.spl2"  title="原文:: Default value: 50">デフォルト値: <code>50</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.fKW4C.2"  title="原文: period-executions"><code>period-executions</code></span></td>
<td class=""><span class="merged" id="all.3BCCNT.spl1" title="原文 : The period for executing poll cycles in millis.">ポーリング・サイクルを実行する期間(ミリ秒)。</span> <span class="merged" id="all.3BCCNT.spl2"  title="原文:: Default value: 100">デフォルト値: <code>100</code></span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UHAvl.2"  title="原文: session-group-id"><code>session-group-id</code></span></td>
<td class=""><span class="merged" id="all.2gZzrR" title="原文 : When multiple channels share the same session-group-id, they also share the same JMS session and JDBC connection.">複数のチャネルが同じ<code>session-group-id</code>を共有する場合、同じJMSセッションおよびJDBC接続も共有します。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.vNvnB"  title="原文: producer.unit-of-order"><code>producer.unit-of-order</code></span></td>
<td class=""><span class="merged" id="all.3tcv63" title="原文 : All messages from the same unit of order will be processed sequentially in the order they were created.">同じ順序単位のすべてのメッセージは、作成された順序で順番に処理されます。</span></td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4RMTUP.spl1" title="原文 : Configuration is straight forward.">構成は直進です。</span> <span class="merged" id="all.4RMTUP.spl2" title="原文 : Use JNDI for localizing and configuring of JMS ConnectionFactory from WebLogic.">JNDIを使用して、WebLogicからJMS ConnectionFactoryをローカライズおよび構成します。</span> <span class="merged" id="all.4RMTUP.spl3" title="原文 : Notice the destination property which is used to define the queue with WebLogic CDI Syntax."><a href="https://docs.oracle.com/cd/E24329_01/web.1211/e24387/lookup.htm#JMSPG915" target="_blank">「WebLogic CDI構文」</a>でキューを定義するために使用されるdestinationプロパティに注意してください。</span> </p>

<markup
lang="yaml"
title="Example config:"
>mp:
  messaging:
    connector:
      helidon-weblogic-jms:
        # JMS factory configured in WebLogic
        jms-factory: jms/TestConnectionFactory
        # Path to the WLS Thin T3 client jar
        thin-jar: wlthint3client.jar
        url: t3://localhost:7001
    incoming:
      from-wls:
        connector: helidon-weblogic-jms
        # WebLogic CDI Syntax(CDI stands for Create Destination Identifier)
        destination: ./TestJMSModule!TestQueue
    outgoing:
      to-wls:
        connector: helidon-weblogic-jms
        # JNDI identifier for the same queue
        jndi.destination: jms/TestQueue</markup>

<p><span class="merged" id="all.4B1qDp" title="原文 : When configuring destination with WebLogic CDI, apply the following syntax:">WebLogic CDIを使用して宛先を構成する場合は、次の構文を適用します:</span></p>

<p><span class="merged" id="all.1FxdTB"  title="原文: jms-server-name/jms-module-name!destination-name"><code>jms-server-name/jms-module-name!destination-name</code></span></p>

<p><span class="merged" id="all.6UPdd" title="原文 : In our example, we are replacing jms-server-name with . as we don’t have to look up the server we are connected to.">この例では、jms-server-nameを<code>.</code>に置き換えています。これは、接続しているサーバーを検索する必要がないためです。</span></p>

<p><span class="merged" id="all.4UW7GU"  title="原文: jms-server-name/jms-module-name!jms-server-name@udd-name"><code>jms-server-name/jms-module-name!jms-server-name@udd-name</code></span></p>

<p><span class="merged" id="all.37Ktfe" title="原文 : Destination for UDD doesn’t have ./ prefix, because distributed destinations can be served by multiple servers within a cluster.">分散宛先はクラスタ内の複数のサーバーで処理できるため、UDDの宛先には<code>./</code>プレフィクスがありません。</span></p>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.23"  title="原文:: Usage">使用</span></h2>
<div class="section">

<h3 id="_consuming"><span class="merged" id="all.3gRT7Y.2"  title="原文:: Consuming">消費</span></h3>
<div class="section">
<markup
lang="java"
title="Consuming one by one unwrapped value:"
>@Incoming("from-wls")
public void consumeWls(String msg) {
    System.out.println("WebLogic says: " + msg);
}</markup>

<markup
lang="java"
title="Consuming one by one, manual ack:"
>@Incoming("from-wls")
@Acknowledgment(Acknowledgment.Strategy.MANUAL)
public CompletionStage&lt;?&gt; consumewls(JmsMessage&lt;String&gt; msg) {
    System.out.println("WebLogic says: " + msg.getPayload());
    return msg.ack();
}</markup>

</div>


<h3 id="_producing"><span class="merged" id="all.4AZ8Ti.2"  title="原文:: Producing">生産</span></h3>
<div class="section">
<markup
lang="java"
title="Producing to WebLogic JMS:"
>@Outgoing("to-wls")
public PublisherBuilder&lt;String&gt; produceToWls() {
    return ReactiveStreams.of("test1", "test2");
}</markup>

<markup
lang="java"
title="Example of more advanced producing to WebLogic JMS:"
>@Outgoing("to-wls")
public PublisherBuilder&lt;String&gt; produceToJms() {
    return ReactiveStreams.of("test1", "test2")
                .map(s -&gt; JmsMessage.builder(s)
                              .correlationId(UUID.randomUUID().toString())
                              .property("stringProp", "cool property")
                              .property("byteProp", 4)
                              .property("intProp", 5)
                              .onAck(() -&gt; System.out.println("Acked!"))
                              .build());
}</markup>

<markup
lang="java"
title="Example of even more advanced producing to WebLogic JMS with custom mapper:"
>@Outgoing("to-wls")
public PublisherBuilder&lt;String&gt; produceToJms() {
    return ReactiveStreams.of("test1", "test2")
                .map(s -&gt; JmsMessage.builder(s)
                            .customMapper((p, session) -&gt; {
                                TextMessage textMessage = session.createTextMessage(p);
                                textMessage.setStringProperty("custom-mapped-property", "XXX" + p);
                                return textMessage;
                            })
                            .build()
                    );
}</markup>

</div>


<h3 id="_secured_t3_over_sslt3s"><span class="merged" id="all.YSWti" title="原文 : Secured t3 over SSL(t3s)">SSL(t3s)を介したセキュアなt3</span></h3>
<div class="section">
<p><span class="merged" id="all.LEV7T.spl1" title="原文 : For initiating SSL secured t3 connection, trust keystore with WLS public certificate is needed.">SSLで保護されたt3接続を開始するには、WLSパブリック証明書を含む信頼キーストアが必要です。</span> <span class="merged" id="all.LEV7T.spl2" title="原文 : Standard WLS installation has pre-configured Demo trust store: WL_HOME/server/lib/DemoTrust.jks, we can store it locally for connecting WLS over t3s.">標準的なWLSインストールには、デモ・トラスト・ストアが事前構成されています: <code>WL_HOME/server/lib/DemoTrust.jks</code>では、t3sを介してWLSを接続するためにローカルに格納できます。</span> </p>

<markup
lang="yaml"
title="Example config:"
>mp:
  messaging:
    connector:
      helidon-weblogic-jms:
        jms-factory: jms/TestConnectionFactory
        thin-jar: wlthint3client.jar
        # Notice t3s protocol is used
        url: t3s://localhost:7002</markup>

<p><span class="merged" id="all.3UQQAO" title="原文 : Helidon application needs to be aware about our WLS SSL public certificate.">Helidonアプリケーションは、WLS SSLパブリック証明書を認識している必要があります。</span></p>

<markup
lang="bash"
title="Running example with WLS truststore"
>java --add-opens=java.base/java.io=ALL-UNNAMED \
-Djavax.net.ssl.trustStore=DemoTrust.jks \
-Djavax.net.ssl.trustStorePassword=DemoTrustKeyStorePassPhrase \
-jar ./target/helidon-wls-jms-demo.jar</markup>

</div>

</div>

</doc-view>
