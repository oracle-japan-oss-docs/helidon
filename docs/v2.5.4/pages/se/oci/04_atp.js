<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3HRh5W" title="原文 : OCI Autonomous Transaction Processing">OCI Autonomous Transaction Processing</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1ZOnFb" title="原文 : The Helidon SE OCI Autonomous Transaction Processing integration provides a reactive API to ATP database in Oracle cloud.">Helidon SE OCI Autonomous Transaction Processing統合により、OracleクラウドのATPデータベースにリアクティブAPIが提供されます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_deprecated"><span class="merged" id="all.3F3fuy.3"  title="原文:: Deprecated">非推奨</span></h2>
<div class="section">
<p><span class="merged" id="all.3za7jk.3.spl1" title="原文 : The custom Helidon SE OCI clients documented here are deprecated.">ここに記載されたカスタムHelidon SE OCIクライアントは非推奨です。</span> <span class="merged" id="all.3za7jk.3.spl2" title="原文 : It is recommended that you use the OCI Java SDK directly, in particular the Async clients.">OCI Java SDK、特に非同期クライアントを直接使用することをお薦めします。</span> <span class="merged" id="all.3za7jk.3.spl3"  title="原文: For more information see:">詳細は、次のドキュメントを参照してください。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1Z8Rz0" title="原文 : OCI Database Documentation "><a href="https://docs.oracle.com/en-us/iaas/Content/Database/home.htm" id="" target="_blank" >OCIデータベース・ドキュメント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.30u9nY" title="原文 : OCI Database Javadoc "><a href="https://docs.oracle.com/en-us/iaas/tools/java/latest/com/oracle/bmc/database/package-summary.html" id="" target="_blank" >OCIデータベースJavadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.4OABcy.1" title="原文 : Helidon SE OCI ATP Example"><a href="https://github.com/oracle/helidon/tree/2.5.4/examples/integrations/oci/atp-reactive/" id="" target="_blank" >Helidon SE OCI ATPの例</a></span></p>

</li>
</ul>
</div>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.7"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<p><span class="merged" id="all.2AP6Yx.3.spl1" title="原文 : Helidon integration with Oracle Cloud Infrastructure is still experimental and not intended for production use.">HelidonとOracle Cloud Infrastructureの統合は、引き続き試験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.2AP6Yx.3.spl2" title="原文 : APIs and features have not yet been fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>

</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.53"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.1tgOk3" title="原文 : To enable OCI Autonomous Transaction Processing add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCI Autonomous Transaction Processingを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.integrations.oci&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-integrations-oci-atp&lt;/artifactId&gt;
        &lt;/dependency&gt;</markup>

</div>

<h2 id="_setting_up_the_autonomous_transaction_processing"><span class="merged" id="all.4GPBqT" title="原文 : Setting up the Autonomous Transaction Processing">Autonomous Transaction Processingの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.1e2HQZ" title="原文 : In order to use the OCI Autonomous Transaction Processing integration, the following setup should be made:">OCI Autonomous Transaction Processing統合を使用するには、次の設定を行う必要があります:</span></p>

<markup
lang="java"

>Config ociConfig = config.get("oci");

OciAutonomousDbRx ociAutonomousDb = OciAutonomousDbRx.create(ociConfig);</markup>

<p><span class="merged" id="all.cVwNP.2.spl1" title="原文 : Current configuration requires ~/.oci/config to be available in the home folder.">現在の構成では、<code>~/.oci/config</code>がホーム・フォルダで使用可能である必要があります。</span> <span class="merged" id="all.cVwNP.2.spl2" title="原文 : This configuration file can be downloaded from OCI.">この構成ファイルはOCIからダウンロードできます。</span> </p>

<p><span class="merged" id="all.1TJMhW" title="原文 : Routing should be added to the WebServer, in our case pointing to /atp:"><code>Routing</code>を<code>WebServer</code>に追加する必要があります。ここでは、<code>/atp</code>を指しています:</span></p>

<markup
lang="java"

>        WebServer.builder()
                .config(config.get("server"))
                .routing(Routing.builder()
                                .register("/atp", new AtpService(autonomousDbRx, config)))
                .build();</markup>

<p><span class="merged" id="all.10xSA.1" title="原文 : Additionally, in application.yaml OCI properties should be specified:">また、<code>application.yaml</code> OCIプロパティを指定する必要があります:</span></p>

<markup
lang="yaml"

>oci:
  atp:
    ocid: "&lt;ocid of your ATP database&gt;"
    walletPassword: "&lt;password to encrypt the keys inside the wallet&gt;"</markup>

<p><span class="merged" id="all.7vnUV" title="原文 : The exact values are available from OCI console.">正確な値はOCIコンソールから入手できます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OCI ATP" src="./images/oci/atpocid.png" /> </v-card-text> </v-card>

</div>

<h2 id="_using_the_autonomous_transaction_processing"><span class="merged" id="all.2yXpST" title="原文 : Using the Autonomous Transaction Processing">Autonomous Transaction Processingの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3yp4qV" title="原文 : In the Service we must specify the mapping for operations with the database and their handlers:">サービスでは、データベースとそのハンドラを使用した操作のマッピングを指定する必要があります:</span></p>

<markup
lang="java"

>@Override
public void update(Routing.Rules rules) {
    rules.get("/wallet", this::generateWallet);
}</markup>


<h3 id="_generate_wallet"><span class="merged" id="all.1nRjdW"  title="原文:: Generate Wallet">ウォレットの生成</span></h3>
<div class="section">
<p><span class="merged" id="all.iXLGi" title="原文 : To generate wallet file for OCI Autonomous Transaction Processing:">OCI Autonomous Transaction Processingのウォレット・ファイルを生成するには:</span></p>

<markup
lang="java"

>    private void generateWallet(ServerRequest req, ServerResponse res) {
        autonomousDbRx.generateWallet(GenerateAutonomousDatabaseWallet.Request.builder()) <span class="conum" data-value="1" />
                .flatMapOptional(ApiOptionalResponse::entity)
                .map(GenerateAutonomousDatabaseWallet.Response::walletArchive) <span class="conum" data-value="2" />
                .ifEmpty(() -&gt; LOGGER.severe("Unable to obtain wallet!"))
                .flatMapSingle(this::createDbClient) <span class="conum" data-value="3" />
                .flatMap(dbClient -&gt; dbClient.execute(exec -&gt; exec.query("SELECT 'Hello world!!' FROM DUAL")))
                .first()
                .map(dbRow -&gt; dbRow.column(1).as(String.class)) <span class="conum" data-value="4" />
                .ifEmpty(() -&gt; res.status(404).send())
                .onError(res::send)
                .forSingle(res::send);
    }</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2FW681" title="原文 : Create the Request using GenerateAutonomousDatabaseWallet.Request.builder()"><code>GenerateAutonomousDatabaseWallet.Request.builder()</code>を使用した<code>Request</code>の作成</span></li>
<li data-value="2"><span class="merged" id="all.17Hn9t" title="原文 : Retrieve &apos;walletArchive&apos; from the response.">レスポンスから'walletArchive'を取得します。</span></li>
<li data-value="3"><span class="merged" id="all.2g5VEq" title="原文 : Create DBClient using info from &apos;walletArchive&apos;">'walletArchive'からの情報を使用してDBClientを作成</span></li>
<li data-value="4"><span class="merged" id="all.2pj0Ev" title="原文 : Read the first column from first row of result.">結果の最初の行から最初の列を読み取ります。</span></li>
</ul>
<p><span class="merged" id="all.3VEZv" title="原文 : For complete code, about how to create DBClient using wallet info, please see ATP Reactive Example">完全なコードについては、ウォレット情報を使用してDBClientを作成する方法については、<a href="https://github.com/oracle/helidon/tree/master/examples/integrations/oci/atp-reactive" id="" target="_blank" >「ATPリアクティブの例」</a>を参照してください</span></p>

</div>
</div>
</doc-view>
