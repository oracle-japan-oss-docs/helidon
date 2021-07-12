<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3GTTKK" title="原文 : WebServer TLS configuration">WebServer TLS構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.34DKy9" title="原文 : Configure TLS either programmatically, or by the Helidon configuration framework.">TLSは、プログラムによって、またはHelidon構成フレームワークによって構成します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_tls_in_your_code"><span class="merged" id="all.2cogWe.1" title="原文 : Configuring TLS in your code">コードでのTLSの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3rNN1S" title="原文 : To configure TLS in WebServer programmatically create your keystore configuration and pass it to the WebServer builder.">WebServerでTLSをプログラムで構成するには、キーストア構成を作成してWebServerビルダーに渡します。</span></p>

<markup
lang="java"

>KeyConfig keyConfig = KeyConfig.keystoreBuilder()
                //Whether this keystore is also trust store
                .trustStore()
                //Keystore location/name
                .keystore(Resource.create("keystore.p12"))
                //Password to the keystore
                .keystorePassphrase("password")
                .build();

WebServer.builder()
         .tls(WebServerTls.builder()
               .trust(keyConfig)
               .privateKey(keyConfig)
               .build())
         .build();</markup>

</div>

<h2 id="_configuring_tls_in_the_config_file"><span class="merged" id="all.2x0R1m.1" title="原文 : Configuring TLS in the config file">構成ファイルでのTLSの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3da0mn.1" title="原文 : It is also possible to configure TLS via the config file.">構成ファイルを介してTLSを構成することもできます。</span></p>

<markup
lang="yaml"
title="WebServer TLS構成ファイル<code>application.yaml</code>"
>server:
  tls:
    #Truststore setup
    trust:
      keystore:
        passphrase: "password"
        trust-store: true
        resource:
          resource-path: "keystore.p12"
    #Keystore with private key and server certificate
    private-key:
      keystore:
        passphrase: "password"
        resource:
          resource-path: "keystore.p12"</markup>

<p><span class="merged" id="all.1Cq2QG.3" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="クラスパスにある<code>application.yaml</code>ファイルを使用したWebServerの初期化"
>Config config = Config.create();
WebServer webClient = WebServer.create(routing, config.get("server"));</markup>

<p><span class="merged" id="all.2IKRt1" title="原文 : Or you can only create WebServerTls instance based on the config file.">または、構成ファイルに基づいてのみWebServerTlsインスタンスを作成できます。</span></p>

<markup
lang="java"
title="クラスパスにある<code>application.yaml</code>ファイルに基づくWebServerTlsインスタンス"
>Config config = Config.create();
WebServerTls.builder()
    .config(config.get("server.tls"))
    .build();</markup>

</div>

<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.22"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<p><span class="merged" id="all.1IQyQS" title="原文 : See all configuration options here.">すべての構成オプション<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/WebServerTls.html" id="" target="_blank" >「こちら」</a>を参照してください。</span></p>

<p><span class="merged" id="all.1iMnAK.1" title="原文 : Available server certificate configuration options:">使用可能なサーバー証明書の構成オプション:</span></p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 16.667%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.28YvFB.3" title="原文 : Configuration key">構成キー</span></th>
<th><span class="merged" id="all.3T02MF.8"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.2fU2gv.4"  title="原文:: Java type">Javaタイプ</span></th>
<th><span class="merged" id="all.4JM9z7.23"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.1asGOD"  title="原文:: client-auth"><strong><code>client-auth</code></strong></span></td>
<td class=""><span class="merged" id="all.1KuV2Z"  title="原文:: NONE">NONE</span></td>
<td class=""><span class="merged" id="all.3CBJTL"  title="原文:: Enum">列挙型</span></td>
<td class=""><span class="merged" id="all.1a6LCP.spl1" title="原文 : See here for all possible values.">使用可能なすべての値については、<a href="./apidocs/io.helidon.webserver/io/helidon/webserver/ClientAuthentication.html" id="" target="_blank" >「こちら」</a>を参照してください。</span> <span class="merged" id="all.1a6LCP.spl2" title="原文 : Whether to require client certificate authentication">クライアント証明書認証が必要かどうか</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.6FoDC" title="原文 : protocols"><strong><code>protocols</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2nneiF.2"  title="原文:: String">文字列</span></td>
<td class=""><span class="merged" id="all.4C3BlO" title="原文 : TLS protocols to enable with the server socket">サーバー・ソケットで有効にするTLSプロトコル</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1cdMYP" title="原文 : session-cache-size"><strong><code>session-cache-size</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.N4Pvl.7"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.4UAeyR" title="原文 : The size of the cache used for storing SSL session objects">SSLセッション・オブジェクトの格納に使用されるキャッシュのサイズ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1kQp3V"  title="原文:: session-timeout-seconds"><strong><code>session-timeout-seconds</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.N4Pvl.8"  title="原文:: int">int</span></td>
<td class=""><span class="merged" id="all.2P8xZf" title="原文 : The timeout for the cached SSL session objects, in seconds">キャッシュされたSSLセッション・オブジェクトのタイムアウト(秒)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3iCzis" title="原文 : private-key"><strong><code>private-key</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3ChfkA.3"  title="原文:: Object">オブジェクト</span></td>
<td class=""><span class="merged" id="all.4UxHy2.2" title="原文 : Keystore configuration, please follow the example above">キーストアの構成は、前述の例に従ってください</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4O3PQs"  title="原文:: trust"><strong><code>trust</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3ChfkA.4"  title="原文:: Object">オブジェクト</span></td>
<td class=""><span class="merged" id="all.4UxHy2.3" title="原文 : Keystore configuration, please follow the example above">キーストアの構成は、前述の例に従ってください</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</doc-view>
