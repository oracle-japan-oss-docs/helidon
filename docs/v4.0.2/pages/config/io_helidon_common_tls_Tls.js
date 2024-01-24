<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2uNzWq" title="原文 : Tls (common.tls) Configuration">Tls (common.tls)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2WdE0J" title="原文 : Type: io.helidon.common.tls.Tls">タイプ: <a href="/apidocs/io.helidon.common.tls/io/helidon/common/tls/Tls.html" target="_blank">io.helidon.common.tls.Tls</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.11"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.11" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 23.077%;">
<col style="width: 23.077%;">
<col style="width: 15.385%;">
<col style="width: 38.462%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.2XKMH3.12"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.12"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.12"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.12"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.yFryw"  title="原文: cipher-suite"><code>cipher-suite</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.6"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Ama4T" title="原文 : Enabled cipher suites for TLS communication.">TLS通信用の暗号スイートを有効化しました。</span></p>

<markup>@return cipher suits to enable, by default (or if list is empty), all available cipher suites
        are enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zwkgn"  title="原文: client-auth"><code>client-auth</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.xpxai" title="原文 : TlsClientAuth (REQUIRED, OPTIONAL, NONE)">TlsClientAuth (REQUIRED, OPTIONAL, NONE)</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.10P0gX"  title="原文: NONE"><code>NONE</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3PxQzD" title="原文 : Configure requirement for mutual TLS.">相互TLSの要件を構成します。</span></p>

<markup>@return what type of mutual TLS to use, defaults to TlsClientAuth#NONE</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.48UcwL"  title="原文: enabled"><code>enabled</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.18"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.9"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.15tsoB" title="原文 : Flag indicating whether Tls is enabled.">Tlsが有効になっているかどうかを示すフラグ。</span></p>

<markup>@return enabled flag</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2f0MYM"  title="原文: endpoint-identification-algorithm"><code>endpoint-identification-algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.15"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4XBdVS"  title="原文: HTTPS"><code>HTTPS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1uNqGT" title="原文 : Identification algorithm for SSL endpoints.">SSLエンドポイントの識別アルゴリズム。</span></p>

<markup>@return configure endpoint identification algorithm, or set to `NONE`
        to disable endpoint identification (equivalent to hostname verification).
        Defaults to `Tls#ENDPOINT_IDENTIFICATION_HTTPS`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zCAWm"  title="原文: internal-keystore-provider"><code>internal-keystore-provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.16"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4G4sDO" title="原文 : Provider of the key stores used internally to create a key and trust manager factories.">キーおよびトラスト・マネージャ・ファクトリを作成するために内部的に使用されるキー・ストアのプロバイダ。</span></p>

<markup>@return keystore provider, if not defined, provider is not specified</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4I8rc8"  title="原文: internal-keystore-type"><code>internal-keystore-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.17"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.Qf7Ce" title="原文 : Type of the key stores used internally to create a key and trust manager factories.">キーおよびトラスト・マネージャ・ファクトリを作成するために内部的に使用されるキー・ストアのタイプ。</span></p>

<markup>@return keystore type, defaults to java.security.KeyStore#getDefaultType()</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4feYPC"  title="原文: key-manager-factory-algorithm"><code>key-manager-factory-algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.18"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1D6tPP.spl1" title="原文 : Algorithm of the key manager factory used when private key is defined.">秘密キーの定義時に使用されるキー・マネージャ・ファクトリのアルゴリズム。</span> <span class="merged" id="all.1D6tPP.spl2" title="原文 : Defaults to javax.net.ssl.KeyManagerFactory#getDefaultAlgorithm().">デフォルトはjavax.net.ssl.KeyManagerFactory#getDefaultAlgorithm()です。</span> </p>

<markup>@return algorithm to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1h51IP"  title="原文: manager"><code>manager</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.47prT3" title="原文 : io.helidon.common.tls.TlsManager (service provider interface)">io.helidon.common.tls.TlsManager (サービス・プロバイダ・インタフェース)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.41nrRn.spl1" title="原文 : The Tls manager.">TLSマネージャ。</span> <span class="merged" id="all.41nrRn.spl2" title="原文 : If one is not explicitly defined in the config then a default manager will be created.">構成で明示的に定義されていない場合は、デフォルト・マネージャが作成されます。</span> </p>

<markup>@return the tls manager of the tls instance
@see ConfiguredTlsManager</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3HVwVy"  title="原文: private-key"><code>private-key</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1MLbDa"  title="原文: PrivateKey">PrivateKey</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Ykg0z.spl1" title="原文 : Private key to use.">使用する秘密キー。</span> <span class="merged" id="all.3Ykg0z.spl2" title="原文 : For server side TLS, this is required.">サーバー側TLSの場合、これは必須です。</span> <span class="merged" id="all.3Ykg0z.spl3" title="原文 : For client side TLS, this is optional (used when mutual TLS is enabled).">クライアント側TLSの場合、これはオプションです(相互TLSが有効な場合に使用されます)。</span> </p>

<markup>@return private key to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4T3cXD"  title="原文: protocol"><code>protocol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.19"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.3v0eEP"  title="原文: TLS"><code>TLS</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2HtfuJ" title="原文 : Configure the protocol used to obtain an instance of javax.net.ssl.SSLContext.">javax.net.ssl.SSLContextのインスタンスを取得するために使用するプロトコルを構成します。</span></p>

<markup>@return protocol to use, defaults to `DEFAULT_PROTOCOL`</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2lQacV"  title="原文: protocols"><code>protocols</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.7"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1wSXwP.spl1" title="原文 : Enabled protocols for TLS communication.">TLS通信用のプロトコルを有効にします。</span> <span class="merged" id="all.1wSXwP.spl2" title="原文 : Example of valid values for TLS protocol: TLSv1.3, TLSv1.2"><code>TLS</code>プロトコルの有効な値の例: <code>TLSv1.3</code>, <code>TLSv1.2</code></span> </p>

<markup>@return protocols to enable, by default (or if list is empty), all available protocols are enabled</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4MYSa1"  title="原文: provider"><code>provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.20"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WJOoR" title="原文 : Use explicit provider to obtain an instance of javax.net.ssl.SSLContext.">明示的なプロバイダを使用して、javax.net.ssl.SSLContextのインスタンスを取得します。</span></p>

<markup>@return provider to use, defaults to none (only #protocol() is used by default)</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4UYtoI"  title="原文: secure-random-algorithm"><code>secure-random-algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.21"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4I7olt" title="原文 : Algorithm to use when creating a new secure random.">新しいセキュア・ランダムを作成するときに使用するアルゴリズム。</span></p>

<markup>@return algorithm to use, by default uses java.security.SecureRandom constructor</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.42gsBU"  title="原文: secure-random-provider"><code>secure-random-provider</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.22"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.47I9Q4.spl1" title="原文 : Provider to use when creating a new secure random.">新規セキュア・ランダムの作成時に使用するプロバイダ。</span> <span class="merged" id="all.47I9Q4.spl2" title="原文 : When defined, #secureRandomAlgorithm() must be defined as well.">定義する場合は、#secureRandomAlgorithm()も定義する必要があります。</span> </p>

<markup>@return provider to use, by default no provider is specified</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1xMi9h"  title="原文: session-cache-size"><code>session-cache-size</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.N4Pvl.16"  title="原文:: int">int</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.lhex8"  title="原文: 1024"><code>1024</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3GlWHE" title="原文 : SSL session cache size.">SSLセッション・キャッシュ・サイズ。</span></p>

<markup>@return session cache size, defaults to 1024</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Qzotx"  title="原文: session-timeout"><code>session-timeout</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KNkAg.4"  title="原文:: Duration">期間</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.4bxHMq"  title="原文: PT30M"><code>PT30M</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cqCoT" title="原文 : SSL session timeout.">SSLセッションのタイムアウト。</span></p>

<markup>@return session timeout, defaults to 30 minutes</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1m7hUC"  title="原文: trust"><code>trust</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3KX96i" title="原文 : X509Certificate[]">X509Certificate[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.9aaG" title="原文 : List of certificates that form the trust manager.">トラスト・マネージャを形成する証明書のリスト。</span></p>

<markup>@return certificates to be trusted</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3hBTUK"  title="原文: trust-all"><code>trust-all</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.19"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.5"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1zzm52" title="原文 : Trust any certificate provided by the other side of communication.">通信の反対側から提供された証明書を信頼します。</span></p>

<markup>&lt;b&gt;This is a dangerous setting: &lt;/b&gt; if set to `true`, any certificate will be accepted, throwing away
most of the security advantages of TLS. &lt;b&gt;NEVER&lt;/b&gt; do this in production.</markup>
<markup>@return whether to trust all certificates, do not use in production</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Kg51b"  title="原文: trust-manager-factory-algorithm"><code>trust-manager-factory-algorithm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.23"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2lAUwg" title="原文 : Trust manager factory algorithm.">トラスト・マネージャのファクトリ・アルゴリズム。</span></p>

<markup>@return algorithm to use</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
