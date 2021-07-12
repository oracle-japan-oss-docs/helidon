<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3AEFq0"  title="原文:: OCI Object Storage">OCIオブジェクト・ストレージ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1F6Fr5" title="原文 : The Helidon MP OCI Object Storage integration provides easy access files stored in Oracle cloud.">Helidon MP OCIオブジェクト・ストレージ統合では、Oracleクラウドに格納されているファイルに簡単にアクセスできます。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_experimental"><span class="merged" id="all.3qlK5J.2"  title="原文:: Experimental">試作</span></h2>
<div class="section">
<div class="admonition warning">
<p class="admonition-inline"><span class="merged" id="all.2AP6Yx.1.spl1" title="原文 : Helidon integration with Oracle Cloud Infrastructure is still experimental and not intended for production use.">HelidonとOracle Cloud Infrastructureの統合は、引き続き試験的であり、本番での使用を目的としていません。</span> <span class="merged" id="all.2AP6Yx.1.spl2" title="原文 : APIs and features have not yet been fully tested and are subject to change.">APIおよび機能はまだ完全にテストされておらず、変更される可能性があります。</span> </p>
</div>
</div>

<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.17" title="原文 : Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.2OMVlH" title="原文 : To enable OCI Object Storage add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">OCIオブジェクト・ストレージを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.integrations.oci&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-integrations-oci-objectstorage&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_setting_up_the_object_storage"><span class="merged" id="all.DW3rI" title="原文 : Setting up the Object Storage">オブジェクト・ストレージの設定</span></h2>
<div class="section">
<p><span class="merged" id="all.1T6kiR" title="原文 : In order to use the OCI Object Storage integration, the following setup should be made:">OCIオブジェクト・ストレージ統合を使用するには、次の設定を行う必要があります:</span></p>

<p><span class="merged" id="all.cVwNP.spl1" title="原文 : Current configuration requires ~/.oci/config to be available in the home folder.">現在の構成では、<code>~/.oci/config</code>がホーム・フォルダで使用可能である必要があります。</span> <span class="merged" id="all.cVwNP.spl2" title="原文 : This configuration file can be downloaded from OCI.">この構成ファイルはOCIからダウンロードできます。</span> </p>

<p><span class="merged" id="all.3Y4Gkh" title="原文 : REST endpoint to work with OCI Object Storage:">OCIオブジェクト・ストレージと連携するためのRESTエンドポイント:</span></p>

<markup
lang="java"

>@Path("/files")
public class ObjectStorageResource {
    private final OciObjectStorage objectStorage;
    private final String bucketName;

    @Inject
    ObjectStorageResource(OciObjectStorage objectStorage, <span class="conum" data-value="1" />
                          @ConfigProperty(name = "oci.objectstorage.bucket")
                                  String bucketName) { <span class="conum" data-value="2" />
        this.objectStorage = objectStorage;
        this.bucketName = bucketName;
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.zpl4r" title="原文 : OciObjectStorage is configured and injected automatically"><code>OciObjectStorage</code>は自動的に構成およびインジェクトされます</span></li>
<li data-value="2"><span class="merged" id="all.y9zFQ" title="原文 : Bucket name is read from the properties">プロパティからバケット名が読み取られます</span></li>
</ul>
<p><span class="merged" id="all.268jLN" title="原文 : Additionally, in microprofile-config.properties OCI properties should be specified:">また、<code>microprofile-config.properties</code> OCIプロパティを指定する必要があります:</span></p>

<markup
lang="properties"

>oci.properties.compartment-ocid: "ocid1.tenancy.oc1..&lt;..&gt;"
oci.properties.objectstorage-namespace: "&lt;..&gt;"
oci.properties.objectstorage-bucket: "demobucket"</markup>

<p><span class="merged" id="all.2uHpqv" title="原文 : The exact values are available in OCI object storage and bucket properties.">正確な値は、OCIオブジェクト・ストレージおよびバケット・プロパティで使用できます。</span></p>



<v-card> <v-card-text class="overflow-y-hidden" style="text-align:center"> <img alt="OCIバケット" src="./images/oci/ocibucket.png" /> </v-card-text> </v-card>

</div>

<h2 id="_using_object_storage"><span class="merged" id="all.3OoJIa" title="原文 : Using Object Storage">オブジェクト・ストレージの使用</span></h2>
<div class="section">

<h3 id="_upload_file"><span class="merged" id="all.4UCLcO"  title="原文:: Upload file">ファイルをアップロード</span></h3>
<div class="section">
<p><span class="merged" id="all.1Hrsc3" title="原文 : To upload a file to OCI Object Storage using the PUT method:"><code>PUT</code>メソッドを使用してOCIオブジェクト・ストレージにファイルをアップロードするには:</span></p>

<markup
lang="java"

>@POST
@Path("/file/{fileName}")
public Response upload(@PathParam("fileName") String fileName,
                     @HeaderParam("Content-Length") long contentLength,
                     @HeaderParam("Content-Type") @DefaultValue("application/octet-stream") String type,
                     InputStream entity) {
    PutObject.Response response = objectStorage.putObject(PutObject.Request.builder() <span class="conum" data-value="1" />
                                                                  .contentLength(contentLength)
                                                                  .bucket(bucketName)
                                                                  .requestMediaType(io.helidon.common.http.MediaType
                                                                                            .parse(type))
                                                                  .objectName(fileName),
                                                          Channels.newChannel(entity));

    return Response.status(response.status().code()) <span class="conum" data-value="2" />
            .header("opc-request-id", response.headers().first("opc-request-id").orElse(""))
            .header("request-id", response.requestId())
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1QJiEw" title="原文 : Use objectStorage.putObject method with`PutObject.Request.builder()` to submit data"><code>objectStorage.putObject</code>メソッドwith`PutObject.Request.builder()を使用してデータを送信</span></li>
<li data-value="2"><span class="merged" id="all.2C654F" title="原文 : Put the result in the Response"><code>Response</code>への結果の配置</span></li>
</ul>
</div>

<h3 id="_download_file"><span class="merged" id="all.1UcVeB"  title="原文:: Download file">ファイルをダウンロード</span></h3>
<div class="section">
<p><span class="merged" id="all.3VnWhI" title="原文 : To download a file from OCI Object Storage using the GET method:"><code>GET</code>メソッドを使用してOCIオブジェクト・ストレージからファイルをダウンロードするには:</span></p>

<markup
lang="java"

>@GET
@Path("/file/{file-name}")
public Response download(@PathParam("file-name") String fileName) {
    ApiOptionalResponse&lt;GetObject.Response&gt; ociResponse = objectStorage.getObject(GetObject.Request.builder() <span class="conum" data-value="1" />
                                                                                                  .bucket(bucketName)
                                                                                                  .objectName(fileName));
    Optional&lt;GetObject.Response&gt; entity = ociResponse.entity(); <span class="conum" data-value="2" />

    if (entity.isEmpty()) {
        return Response.status(Response.Status.NOT_FOUND).build(); <span class="conum" data-value="3" />
    }

    GetObject.Response response = entity.get();

    StreamingOutput stream = output -&gt; response.writeTo(Channels.newChannel(output));

    Response.ResponseBuilder ok = Response.ok(stream, MediaType.APPLICATION_OCTET_STREAM_TYPE) <span class="conum" data-value="4" />
            .header(Http.Header.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
            .header("opc-request-id", ociResponse.headers().first("opc-request-id").orElse(""))
            .header("request-id", ociResponse.requestId());

    ociResponse.headers()
            .first(Http.Header.CONTENT_TYPE)
            .ifPresent(ok::type);

    ociResponse.headers()
            .first(Http.Header.CONTENT_LENGTH)
            .ifPresent(it -&gt; ok.header(Http.Header.CONTENT_LENGTH, it));

    return ok.build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3d5uFi" title="原文 : Use getObject function to make asynchronous request to OCI Object Storage"><code>getObject</code>関数を使用したOCIオブジェクト・ストレージへの非同期リクエストの実行</span></li>
<li data-value="2"><span class="merged" id="all.Q9BXs" title="原文 : The result is of type Optional">結果のタイプは<code>Optional</code>です</span></li>
<li data-value="3"><span class="merged" id="all.1zFx0K" title="原文 : Whenever the result is empty, return status 404">結果が空の場合は常にステータス<code>404</code>を返します</span></li>
<li data-value="4"><span class="merged" id="all.2FIZrJ" title="原文 : Get the response, set headers and return the result">レスポンスを取得し、ヘッダーを設定して結果を返します</span></li>
</ul>
</div>

<h3 id="_delete_file"><span class="merged" id="all.xbryV"  title="原文:: Delete file">ファイルの削除</span></h3>
<div class="section">
<p><span class="merged" id="all.1Mpbxd" title="原文 : Finally, to delete a file, DELETE request should be used:">最後に、ファイルを削除するには、<code>DELETE</code>リクエストを使用する必要があります:</span></p>

<markup
lang="java"

>@DELETE
@Path("/file/{file-name}")
public Response delete(@PathParam("file-name") String fileName) {
    DeleteObject.Response response = objectStorage.deleteObject(DeleteObject.Request.builder() <span class="conum" data-value="1" />
                                                                        .bucket(bucketName)
                                                                        .objectName(fileName));

    return Response.status(response.status().code()) <span class="conum" data-value="2" />
            .header("opc-request-id", response.headers().first("opc-request-id").orElse(""))
            .header("request-id", response.requestId())
            .build();
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2MlYLH" title="原文 : Use deleteObject function and configure a DeleteObject.Request.builder() to submit the delete request"><code>deleteObject</code>ファンクションを使用して、削除リクエストを発行するように<code>DeleteObject.Request.builder()</code>を構成</span></li>
<li data-value="2"><span class="merged" id="all.2SZZXq" title="原文 : Return the result">結果を返します</span></li>
</ul>
</div>
</div>
</doc-view>
