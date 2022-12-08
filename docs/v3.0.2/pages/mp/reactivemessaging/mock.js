<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.25"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.22" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.17" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.17" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3cpSQ3" title="原文 : Helidon Test"><router-link @click.native="this.scrollFix('#_helidon_test_with_mock_connector')" to="#_helidon_test_with_mock_connector">Helidonテスト</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.31"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.C834c.spl1" title="原文 : Mock connector is a simple application scoped bean that can be used for emitting to a channel or asserting received data in a test environment.">モック・コネクタは、単純なアプリケーション・スコープBeanで、チャネルへの発行や、受信したデータのテスト環境でアサートに使用できます。</span> <span class="merged" id="all.C834c.spl2" title="原文 : All data received are kept in memory only.">受信したデータはすべてメモリーに保持されます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.24"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2sFw8e" title="原文 : To enable Mock Connector add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">Mock Connectorを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.messaging.mock&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-messaging-mock&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2B1v2A" title="原文 : Mock connector should be used in the test environment only!">モック・コネクタはテスト環境でのみ使用してください。</span></p>
</div>

<p><span class="merged" id="all.23dyBi" title="原文 : For injecting Mock Connector use @TestConnector qualifier:">モック・コネクタのインジェクトには、<code>@TestConnector</code>修飾子を使用します:</span></p>

<markup
lang="java"

>@Inject
@TestConnector
MockConnector mockConnector;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.21"  title="原文:: Usage">使用方法</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3BxS9L" title="原文 : Emitting Data"><router-link @click.native="this.scrollFix('#_emitting_data')" to="#_emitting_data">データの出力</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4PhHW2" title="原文 : Asserting Data"><router-link @click.native="this.scrollFix('#_asserting_data')" to="#_asserting_data">データのアサート</router-link></span></p>

</li>
</ul>


<h3 id="_emitting_data"><span class="merged" id="all.2Zq6E9" title="原文 : Emitting Data">データの出力</span></h3>
<div class="section">
<markup
lang="java"
title="Emitting String values <code>a</code>, <code>b</code>, <code>c</code>"
>mockConnector
     .incoming("my-incoming-channel", String.class) <span class="conum" data-value="1" />
     .emit("a", "b", "c");</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3zY2gG" title="原文 : Get incoming channel of given name and payload type">指定された名前およびペイロード・タイプの受信チャネルの取得</span></li>
</ul>

</div>


<h3 id="_asserting_data"><span class="merged" id="all.3iYd6d" title="原文 : Asserting Data">データのアサート</span></h3>
<div class="section">
<markup
lang="java"
title="Awaiting and asserting payloads with custom mapper"
>mockConnector
    .outgoing("my-outgoing-channel", String.class)           <span class="conum" data-value="1" />
    .awaitData(TIMEOUT, Message::getPayload, "a", "b", "c"); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3lyix5" title="原文 : Get outgoing channel of given name and payload type">指定された名前およびペイロード・タイプの送信チャネルを取得</span></li>
<li data-value="2"><span class="merged" id="all.3kSRaU" title="原文 : Request number of expected items and block the thread until items arrive then assert the payloads">予想されるアイテムの数をリクエストし、アイテムが到着するまでスレッドをブロックしてからペイロードのアサート</span></li>
</ul>

</div>


<h3 id="_configuration"><span class="merged" id="all.Pfqvy.22"  title="原文:: Configuration">構成</span></h3>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3H5QDp.2"  title="原文:: Key">キー</span></td>
<td class=""><span class="merged" id="all.3T02MF.2"  title="原文:: Default value">デフォルト値</span></td>
<td class=""><span class="merged" id="all.4JM9z7.14"  title="原文:: Description">説明</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.roY0P" title="原文 : mock-data">mock-data</span></td>

<td class=""><span class="merged" id="all.2eSkS1" title="原文 : Initial data emitted to the channel immediately after subscription">サブスクリプション直後にチャネルに初期データが発行されました</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.813MO" title="原文 : mock-data-type">mock-data-type</span></td>
<td class=""><span class="merged" id="all.2BceGZ"  title="原文:: java.lang.String">java.lang.String</span></td>
<td class=""><span class="merged" id="all.4EJo3P" title="原文 : Type of the emitted initial data to be emitted">発行される初期データのタイプ</span></td>
</tr>
</tbody>
</table>
</div>

</div>

</div>


<h2 id="_helidon_test_with_mock_connector"><span class="merged" id="all.1JVTgr" title="原文 : Helidon Test with Mock Connector">Helidon Mockコネクタによるテスト</span></h2>
<div class="section">
<p><span class="merged" id="all.2Uv4oW" title="原文 : Mock connector works great with built-in Helidon test support for JUnit 5 or TestNG.">モック・コネクタは、<a href="//home/ytakahas/helidon_v3.0.2_us/helidon/docs/mp/reactivemessaging/../../testing/testing.adoc" target="_blank">JUnit 5</a>または<a href="//home/ytakahas/helidon_v3.0.2_us/helidon/docs/mp/reactivemessaging/../../testing/testing-ng.adoc" target="_blank">TestNG</a>の組み込みHelidonテスト・サポートで最適に動作します。</span></p>

<p><span class="merged" id="all.34TeKT" title="原文 : As Helidon test support makes a bean out of your test, you can inject MockConnector directly into it.">Helidonテスト・サポートによってBeanがテストから除外されるため、MockConnectorを直接インジェクトできます。</span></p>

<markup
lang="java"

>@HelidonTest
@DisableDiscovery <span class="conum" data-value="1" />
@AddBean(MockConnector.class) <span class="conum" data-value="2" />
@AddExtension(MessagingCdiExtension.class) <span class="conum" data-value="3" />
@AddConfig(key = "mp.messaging.incoming.test-channel-in.connector", value = MockConnector.CONNECTOR_NAME)  <span class="conum" data-value="4" />
@AddConfig(key = "mp.messaging.incoming.test-channel-in.mock-data-type", value = "java.lang.Integer")      <span class="conum" data-value="5" />
@AddConfig(key = "mp.messaging.incoming.test-channel-in.mock-data", value = "6,7,8")                       <span class="conum" data-value="6" />
@AddConfig(key = "mp.messaging.outgoing.test-channel-out.connector", value = MockConnector.CONNECTOR_NAME) <span class="conum" data-value="7" />
public class MessagingTest {

    private static final Duration TIMEOUT = Duration.ofSeconds(15);

    @Inject
    @TestConnector
    private MockConnector mockConnector; <span class="conum" data-value="8" />

    @Incoming("test-channel-in")
    @Outgoing("test-channel-out")
    int multiply(int payload) {  <span class="conum" data-value="9" />
        return payload * 10;
    }

    @Test
    void testMultiplyChannel() {
        mockConnector.outgoing("test-channel-out", Integer.TYPE) <span class="conum" data-value="10" />
                .awaitPayloads(TIMEOUT, 60, 70, 80);
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.Evz1e" title="原文 : If you want to add all the beans manually">すべてのBeanを手動で追加する場合</span></li>
<li data-value="2"><span class="merged" id="all.4FFFl7" title="原文 : Manually add MockConnector bean, so it is accessible by messaging for constructing the channels">MockConnector beanを手動で追加し、チャネルを構築するためのメッセージングでアクセスできるようにします</span></li>
<li data-value="3"><span class="merged" id="all.2ALhnf" title="原文 : Messaging support in Helidon MP is provided by this CDI extension">Helidon MPのメッセージング・サポートは、このCDI拡張によって提供されます</span></li>
<li data-value="4"><span class="merged" id="all.3UaooH" title="原文 : Instruct messaging to use mock-connector as an upstream for channel test-channel-in">チャネル<code>test-channel-in</code>のアップストリームとして<code>mock-connector</code>を使用するようにメッセージングに指示</span></li>
<li data-value="5"><span class="merged" id="all.XLKUX" title="原文 : Generate mock data of java.lang.Integer, String is default"><code>java.lang.Integer</code>のモック・データを生成します。文字列はデフォルトです</span></li>
<li data-value="6"><span class="merged" id="all.279VlT" title="原文 : Generate mock data">モック・データの生成</span></li>
<li data-value="7"><span class="merged" id="all.2D9Lc3" title="原文 : Instruct messaging to use mock-connector as a downstream for channel test-channel-out">チャネル<code>test-channel-out</code>のダウンストリームとして<code>mock-connector</code>を使用するようにメッセージングに指示</span></li>
<li data-value="8"><span class="merged" id="all.EsDLg" title="原文 : Inject mock connector so we can access publishers and subscribers registered within the mock connector">モック・コネクタをインジェクトして、モック・コネクタ内にサブスクライブされているパブリッシャおよびサブスクライバにアクセスできるようにします</span></li>
<li data-value="9"><span class="merged" id="all.5lKq7" title="原文 : Messaging processing method connecting together channels test-channel-in and test-channel-out">チャネル<code>test-channel-in</code>と<code>test-channel-out</code>を結び付けるメッセージング処理メソッド</span></li>
<li data-value="10"><span class="merged" id="all.3205e6" title="原文 : Actual JUnit 5 test method which is going to block the thread until 3 items are intercepted on test-channel-out channel&rsquo;s downstream and assert those with expected values."><code>test-channel-out</code>チャネルのダウンストリームで3つのアイテムがインターセプトされ、予想される値を持つアイテムがアサートされるまで、スレッドをブロックする実際のJUnit 5テスト・メソッド。</span></li>
</ul>

</div>

</doc-view>
