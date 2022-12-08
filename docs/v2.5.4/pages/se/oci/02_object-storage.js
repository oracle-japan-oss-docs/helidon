<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3AEFq0.1"  title="原文:: OCI Object Storage">OCIオブジェクト・ストレージ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.38Hkl1" title="原文 : The Helidon SE OCI Object Storage integration provides a reactive API to files stored in Oracle cloud.">Helidon SEオブジェクト・ストレージ統合は、Oracleクラウドに格納されているファイルにリアクティブAPIを提供します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_deprecated"><span class="merged" id="all.3F3fuy.1"  title="原文:: Deprecated">非推奨</span></h2>
<div class="section">
<p><span class="merged" id="all.3za7jk.1.spl1" title="原文 : The custom Helidon SE OCI clients documented here are deprecated.">ここに記載されたカスタムHelidon SE OCIクライアントは非推奨です。</span> <span class="merged" id="all.3za7jk.1.spl2" title="原文 : It is recommended that you use the OCI Java SDK directly, in particular the Async clients.">OCI Java SDK、特に非同期クライアントを直接使用することをお薦めします。</span> <span class="merged" id="all.3za7jk.1.spl3"  title="原文: For more information see:">詳細は、次のドキュメントを参照してください。</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.FLZxs" title="原文 : OCI Object Storage Documentation "><a href="https://docs.oracle.com/en-us/iaas/Content/Object/home.htm" id="" target="_blank" >OCI Object Storageのドキュメント</a></span></p>

</li>
<li>
<p><span class="merged" id="all.1ygxJ6" title="原文 : OCI Object Storage Javadoc "><a href="https://docs.oracle.com/en-us/iaas/tools/java/latest/com/oracle/bmc/objectstorage/package-summary.html" id="" target="_blank" >OCIオブジェクト・ストレージJavadoc</a></span></p>

</li>
<li>
<p><span class="merged" id="all.E7vDq.1" title="原文 : Helidon SE OCI Object Storage Example"><a href="https://github.com/oracle/helidon/tree/2.5.4/examples/integrations/oci/objectstorage-reactive/" id="" target="_blank" >Helidon SE OCIオブジェクト・ストレージの例</a></span></p>

</li>
</ul>
</div>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.5"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<p><span class="merged" id="all.2AP6Yx.1.spl1" title="原文 : Helidon integration with Oracle Cloud Infrastructure is still experimental and not intended for production use.">HelidonとOracle Cloud Infrastructureの統合は、引き続き試験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.2AP6Yx.1.spl2" title="原文 : APIs and features have not yet been fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>

</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.51"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2OMVlH.1" title="原文 : To enable OCI Object Storage add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCIオブジェクト・ストレージを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.integrations.oci&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-integrations-oci-objectstorage&lt;/artifactId&gt;
        &lt;/dependency&gt;</markup>

</div>

<h2 id="_setting_up_the_object_storage"><span class="merged" id="all.DW3rI" title="原文 : Setting up the Object Storage">オブジェクト・ストレージの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.1T6kiR" title="原文 : In order to use the OCI Object Storage integration, the following setup should be made:">OCIオブジェクト・ストレージ統合を使用するには、次の設定を行う必要があります:</span></p>

<markup
lang="java"

>Config ociConfig = config.get("oci");

OciObjectStorageRx ociObjectStorage = OciObjectStorageRx.create(ociConfig);</markup>

<p><span class="merged" id="all.cVwNP.spl1" title="原文 : Current configuration requires ~/.oci/config to be available in the home folder.">現在の構成では、<code>~/.oci/config</code>がホーム・フォルダで使用可能である必要があります。</span> <span class="merged" id="all.cVwNP.spl2" title="原文 : This configuration file can be downloaded from OCI.">この構成ファイルはOCIからダウンロードできます。</span> </p>

<p><span class="merged" id="all.2A66Yi" title="原文 : Routing should be added to the WebServer, in our case pointing to /file:"><code>Routing</code>を<code>WebServer</code>に追加する必要があります。ここでは、<code>/file</code>を指しています:</span></p>

<markup
lang="java"

>String bucketName = ociConfig.get("objectstorage").get("bucket").asString().get();

        WebServer.builder()
                .config(config.get("server"))
                .routing(Routing.builder()
                                 .register("/files", new ObjectStorageService(ociObjectStorage, bucketName)))
                .build()
                .start()
                .await()</markup>

<p><span class="merged" id="all.10xSA" title="原文 : Additionally, in application.yaml OCI properties should be specified:">また、<code>application.yaml</code> OCIプロパティを指定する必要があります:</span></p>

<markup
lang="yaml"

>oci:
    properties:
      compartment-ocid: "ocid&lt;1&gt;tenancy.oc&lt;1&gt;.&lt;..&gt;"
      objectstorage-namespace: "&lt;...&gt;"
      objectstorage-bucket: "&lt;...&gt;"</markup>

<p><span class="merged" id="all.2uHpqv" title="原文 : The exact values are available in OCI object storage and bucket properties.">正確な値は、OCIオブジェクト・ストレージおよびバケット・プロパティで使用できます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OCIバケット" src="./images/oci/ocibucket.png" /> </v-card-text> </v-card>

</div>

<h2 id="_using_the_object_storage"><span class="merged" id="all.3NkOPc" title="原文 : Using the Object Storage">オブジェクト・ストレージの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.w6wwt" title="原文 : In the Service we must specify the mapping for CRUD operations with the files and their handlers:">サービスでは、CRUD操作のマッピングをファイルおよびそのハンドラとともに指定する必要があります:</span></p>

<markup
lang="java"

>@Override
public void update(Routing.Rules rules) {
    rules.get("/file/{file-name}", this::download)
            .post("/file/{file-name}", this::upload)
            .delete("/file/{file-name}", this::delete)
            .get("/rename/{old-name}/{new-name}", this::rename);
}</markup>


<h3 id="_upload_file"><span class="merged" id="all.4UCLcO"  title="原文:: Upload file">ファイルをアップロード</span></h3>
<div class="section">
<p><span class="merged" id="all.1Hrsc3" title="原文 : To upload a file to OCI Object Storage using the PUT method:"><code>PUT</code>メソッドを使用してOCIオブジェクト・ストレージにファイルをアップロードするには:</span></p>

<markup
lang="java"

>private void upload(ServerRequest req, ServerResponse res) {
    OptionalLong contentLength = req.headers().contentLength();
    if (contentLength.isEmpty()) {
        req.content().forEach(DataChunk::release);
        res.status(Http.Status.BAD_REQUEST_400).send("Content length must be defined");
        return;
    }

    String objectName = req.path().param("file-name");

    PutObject.Request request = PutObject.Request.builder() <span class="conum" data-value="1" />
            .objectName(objectName)
            .bucket(bucketName)
            .contentLength(contentLength.getAsLong());

    req.headers().contentType().ifPresent(request::requestMediaType); <span class="conum" data-value="2" />

    objectStorage.putObject(request,
                            req.content())
            .forSingle(response -&gt; res.send(response.requestId())) <span class="conum" data-value="3" />
            .exceptionally(res::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2LS75y" title="原文 : Create the Request using PutObject.Request.builder()"><code>PutObject.Request.builder()</code>を使用した<code>Request</code>の作成</span></li>
<li data-value="2"><span class="merged" id="all.3afvhh" title="原文 : Define MediaType"><code>MediaType</code>の定義</span></li>
<li data-value="3"><span class="merged" id="all.3JobyE" title="原文 : Execute the request to OCI in asynchronous way and put the result in response object">OCIへのリクエストを非同期的に実行し、その結果を<code>response</code>オブジェクトに格納</span></li>
</ul>
</div>

<h3 id="_download_file"><span class="merged" id="all.1UcVeB"  title="原文:: Download file">ファイルをダウンロード</span></h3>
<div class="section">
<p><span class="merged" id="all.3VnWhI" title="原文 : To download a file from OCI Object Storage using the GET method:"><code>GET</code>メソッドを使用してOCIオブジェクト・ストレージからファイルをダウンロードするには:</span></p>

<markup
lang="java"

>private void download(ServerRequest req, ServerResponse res) {
    String objectName = req.path().param("file-name");

    objectStorage.getObject(GetObject.Request.builder()
                                    .bucket(bucketName)
                                    .objectName(objectName)) <span class="conum" data-value="1" />
            .forSingle(apiResponse -&gt; {
                Optional&lt;GetObjectRx.Response&gt; entity = apiResponse.entity(); <span class="conum" data-value="2" />
                if (entity.isEmpty()) {
                    res.status(Http.Status.NOT_FOUND_404).send(); <span class="conum" data-value="3" />
                } else {
                    GetObjectRx.Response response = entity.get();
                    // copy the content length header to response
                    apiResponse.headers()
                            .first(Http.Header.CONTENT_LENGTH)
                            .ifPresent(res.headers()::add);
                    res.send(response.publisher()); <span class="conum" data-value="4" />
                }
            })
            .exceptionally(res::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3d5uFi" title="原文 : Use getObject function to make asynchronous request to OCI Object Storage"><code>getObject</code>関数を使用したOCIオブジェクト・ストレージへの非同期リクエストの実行</span></li>
<li data-value="2"><span class="merged" id="all.Q9BXs" title="原文 : The result is of type Optional">結果のタイプは<code>Optional</code>です</span></li>
<li data-value="3"><span class="merged" id="all.1zFx0K" title="原文 : Whenever the result is empty, return status 404">結果が空の場合は常にステータス<code>404</code>を返します</span></li>
<li data-value="4"><span class="merged" id="all.1WVyTU" title="原文 : Get the response, set headers and return the result as a Publisher">レスポンスを取得し、ヘッダーを設定して結果を<code>Publisher</code>として返します</span></li>
</ul>
</div>

<h3 id="_rename_file"><span class="merged" id="all.lwRcg"  title="原文:: Rename file">ファイル名の変更</span></h3>
<div class="section">
<p><span class="merged" id="all.3wQn6g" title="原文 : To rename an existing file in the OCI bucket, submit a GET method with two parameters:">OCIバケット内の既存のファイルの名前を変更するには、次の2つのパラメータを使用して<code>GET</code>メソッドを発行します:</span></p>

<markup
lang="java"

>private void rename(ServerRequest req, ServerResponse res) {
    String oldName = req.path().param("old-name");
    String newName = req.path().param("new-name");

    objectStorage.renameObject(RenameObject.Request.builder()
                                       .bucket(bucketName)
                                       .objectName(oldName)
                                       .newObjectName(newName)) <span class="conum" data-value="1" />
            .forSingle(it -&gt; res.send("Renamed to " + newName)) <span class="conum" data-value="2" />
            .exceptionally(res::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.4P1wqN" title="原文 : Use renameObject function and configure a RenameObject.Request.builder() to submit the rename request"><code>renameObject</code>ファンクションを使用して、名前変更リクエストを発行するように<code>RenameObject.Request.builder()</code>を構成</span></li>
<li data-value="2"><span class="merged" id="all.1NLYOP" title="原文 : The request is made in asynchronous way; a Single is returned">リクエストは非同期的に行われ、<code>Single</code>が返されます</span></li>
</ul>
</div>

<h3 id="_delete_file"><span class="merged" id="all.xbryV"  title="原文:: Delete file">ファイルの削除</span></h3>
<div class="section">
<p><span class="merged" id="all.1Mpbxd" title="原文 : Finally, to delete a file, DELETE request should be used:">最後に、ファイルを削除するには、<code>DELETE</code>リクエストを使用する必要があります:</span></p>

<markup
lang="java"

>private void delete(ServerRequest req, ServerResponse res) {
    String objectName = req.path().param("file-name");

    objectStorage.deleteObject(DeleteObject.Request.builder()
                                       .bucket(bucketName)
                                       .objectName(objectName)) <span class="conum" data-value="1" />
            .forSingle(response -&gt; res.status(response.status()).send())
            .exceptionally(res::send);
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2MlYLH" title="原文 : Use deleteObject function and configure a DeleteObject.Request.builder() to submit the delete request"><code>deleteObject</code>ファンクションを使用して、削除リクエストを発行するように<code>DeleteObject.Request.builder()</code>を構成</span></li>
<li data-value="2"><span class="merged" id="all.1NLYOP.1" title="原文 : The request is made in asynchronous way; a Single is returned">リクエストは非同期的に行われ、<code>Single</code>が返されます</span></li>
</ul>
</div>
</div>

<h2 id="_object_storage_health_check"><span class="merged" id="all.2vjAQg" title="原文 : Object Storage Health Check">オブジェクト・ストレージのヘルス・チェック</span></h2>
<div class="section">
<p><span class="merged" id="all.18XZQ7.spl1" title="原文 : If your Helidon application depends on Object Storage accessibility, you may consider setting up a health check to verify connectivity with an OCI bucket.">Helidonアプリケーションがオブジェクト・ストレージのアクセシビリティに依存している場合は、OCIバケットとの接続を検証するためのヘルス・チェックの設定を検討できます。</span> <span class="merged" id="all.18XZQ7.spl2" title="原文 : To do so, first add the following dependency in your pom file:">そのためには、最初に次の依存関係をpomファイルに追加します:</span> </p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.oci&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-oci-objectstorage-health&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.3Vf1MX" title="原文 : In order to register the new health check in Helidon SE, create an instance of HealthSupport and configure it as shown next:">Helidon SEに新しいヘルス・チェックを登録するには、<code>HealthSupport</code>のインスタンスを作成し、次に示すように構成します:</span></p>

<markup
lang="java"

>HealthSupport health = HealthSupport.builder()
    .addLiveness(OciObjectStorageHealthCheck.builder()
                                            .ociObjectStorage(ociObjectStorage)
                                            .bucket(bucketName)
                                            .namespace(namespace)
                                            .build())
    .build();</markup>

<p><span class="merged" id="all.qO5Yp.spl1" title="原文 : where ociObjectStorage, bucketName and namespace are as required for any other Object Storage access."><code>ociObjectStorage</code>、<code>bucketName</code>および<code>namespace</code>は、他のオブジェクト・ストレージ・アクセスに必要です。</span> <span class="merged" id="all.qO5Yp.spl2" title="原文 : Finally, include your newly created HealthSupport object as part of your application&rsquo;s routing:">最後に、新しく作成した<code>HealthSupport</code>オブジェクトをアプリケーションのルーティングの一部として含めます:</span> </p>

<markup
lang="java"

>Routing routing = Routing.builder()
                         .register(health)
                         // other routes here
                         .build();</markup>

<p><span class="merged" id="all.4SRKIh.spl1" title="原文 : When executed, this health check will ping the bucket to make sure it is accessible in your environment.">実行されると、このヘルス・チェックによってバケットが<em>ping</em>され、環境内でアクセス可能であることが確認されます。</span> <span class="merged" id="all.4SRKIh.spl2" title="原文 : For more information about health checks see Health Checks.">ヘルス・チェックの詳細は、<router-link to="/se/health/01_health">「ヘルス・チェック」</router-link>を参照してください。</span> </p>

</div>
</doc-view>
