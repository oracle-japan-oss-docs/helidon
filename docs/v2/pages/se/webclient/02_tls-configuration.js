<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.46o0Yc" title="原文 : WebClient TLS configuration">WebClient TLS構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.4IDcI4" title="原文 : Configure TLS either programmatically or by the Helidon configuration framework.">プログラムまたはHelidon構成フレームワークによってTLSを構成します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_tls_in_your_code"><span class="merged" id="all.2cogWe" title="原文 : Configuring TLS in your code">コードでのTLSの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.46SgLT" title="原文 : The one way to configure TLS in WebClient is in your application code.">WebClientでTLSを構成するには、アプリケーション・コードを使用する方法があります。</span></p>

<markup
lang="java"

>KeyConfig keyConfig = KeyConfig.keystoreBuilder()
                //Whether this keystore is also trust store
                .trustStore()
                //Keystore location/name
                .keystore(Resource.create("client.p12"))
                //Password to the keystore
                .keystorePassphrase("password")
                .build();

WebClient.builder()
         .tls(WebClientTls.builder()
               .certificateTrustStore(keyConfig)
               .clientKeyStore(keyConfig)
               .build())
         .build();</markup>

</div>

<h2 id="_configuring_tls_in_the_config_file"><span class="merged" id="all.2x0R1m" title="原文 : Configuring TLS in the config file">構成ファイルでのTLSの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.3da0mn" title="原文 : It is also possible to configure TLS via the config file.">構成ファイルを介してTLSを構成することもできます。</span></p>

<markup
lang="yaml"
title="WebClient TLS構成ファイル<code>application.yaml</code>"
>webclient:
  tls:
    #Server part defines settings for server certificate validation and truststore
    server:
      keystore:
        passphrase: "password"
        trust-store: true
        resource:
          resource-path: "keystore.p12"
    #Client part defines access to the keystore with client private key or certificate
    client:
      keystore:
        passphrase: "password"
        resource:
          resource-path: "keystore.p12"</markup>

<p><span class="merged" id="all.1Cq2QG.1" title="原文 : Then, in your application code, load the configuration from that file.">次に、アプリケーション・コードで、そのファイルから構成をロードします。</span></p>

<markup
lang="java"
title="クラスパスにある<code>application.yaml</code>ファイルを使用したWebClientの初期化"
>Config config = Config.create();
WebClient webClient = WebClient.create(config.get("webclient"));</markup>

<p><span class="merged" id="all.RC1ee" title="原文 : Or you can only create WebClientTls instance based on the config file.">または、構成ファイルに基づいてのみWebClientTlsインスタンスを作成できます。</span></p>

<markup
lang="java"
title="クラスパスにある<code>application.yaml</code>ファイルに基づくWebClientTlsインスタンス"
>Config config = Config.create();
WebClientTls.builder()
    .config(config.get("webclient.tls"))
    .build();</markup>

</div>

<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.19"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<p><span class="merged" id="all.3cRvrw" title="原文 : See all configuration options here.">すべての構成オプション<a href="./apidocs/io.helidon.webclient/io/helidon/webclient/WebClientTls.html" id="" target="_blank" >「こちら」</a>を参照してください。</span></p>

<p><span class="merged" id="all.1iMnAK" title="原文 : Available server certificate configuration options:">使用可能なサーバー証明書の構成オプション:</span></p>


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
<th><span class="merged" id="all.28YvFB" title="原文 : Configuration key">構成キー</span></th>
<th><span class="merged" id="all.3T02MF.4"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.2fU2gv.1"  title="原文:: Java type">Javaタイプ</span></th>
<th><span class="merged" id="all.4JM9z7.18"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2aD3Pj" title="原文 : disable-hostname-verification"><strong><code>disable-hostname-verification</code></strong></span></td>
<td class=""><span class="merged" id="all.njUKu.12"  title="原文:: false">false</span></td>
<td class=""><span class="merged" id="all.2XHIO8"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.KuXgp" title="原文 : Whether hostname verification should be performed">ホスト名検証を実行するかどうか</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CcZFk" title="原文 : trust-all"><strong><code>trust-all</code></strong></span></td>
<td class=""><span class="merged" id="all.njUKu.13"  title="原文:: false">false</span></td>
<td class=""><span class="merged" id="all.2XHIO8.1"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.1YPIM7" title="原文 : Whether all of the server certificates should be trusted">すべてのサーバー証明書を信頼するかどうか</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.DulMY"  title="原文:: keystore"><strong><code>keystore</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3ChfkA"  title="原文:: Object">オブジェクト</span></td>
<td class=""><span class="merged" id="all.4UxHy2" title="原文 : Keystore configuration, please follow the example above">キーストアの構成は、前述の例に従ってください</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.2VLSre" title="原文 : Available client configuration options:">使用可能なクライアント構成オプション:</span></p>


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
<th><span class="merged" id="all.28YvFB.1" title="原文 : Configuration key">構成キー</span></th>
<th><span class="merged" id="all.3T02MF.5"  title="原文:: Default value">デフォルト値</span></th>
<th><span class="merged" id="all.2fU2gv.2"  title="原文:: Java type">Javaタイプ</span></th>
<th><span class="merged" id="all.4JM9z7.19"  title="原文:: Description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.DulMY.1"  title="原文:: keystore"><strong><code>keystore</code></strong></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3ChfkA.1"  title="原文:: Object">オブジェクト</span></td>
<td class=""><span class="merged" id="all.4UxHy2.1" title="原文 : Keystore configuration, please follow the example above">キーストアの構成は、前述の例に従ってください</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</doc-view>
