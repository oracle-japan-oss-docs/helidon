<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4XkVvj" title="原文 : HttpSignProvider (security.providers.httpsign) Configuration">HttpSignProvider (security.providers.httpsign)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3P1sPy" title="原文 : HTTP header signature provider.">HTTPヘッダー・シグネチャ・プロバイダ。</span></p>

<p><span class="merged" id="all.H1CEa" title="原文 : Type: io.helidon.security.providers.httpsign.HttpSignProvider">タイプ: <a href="./apidocs/io.helidon.security.providers.httpsign/io/helidon/security/providers/httpsign/HttpSignProvider.html" target="_blank">io.helidon.security.providers.httpsign.HttpSignProvider</a></span></p>

<markup
lang="text"
title="Config key"
>http-signatures</markup>

<p><span class="merged" id="all.31kiUh.7" title="原文 : This type provides the following service implementations:">このタイプでは、次のサービス実装が提供されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2t170n.4"  title="原文: io.helidon.security.spi.AuthenticationProvider"><code>io.helidon.security.spi.AuthenticationProvider</code></span></p>

</li>
</ul>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.41"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.42" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.49"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.49"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.49"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.49"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2gtzhY"  title="原文: backward-compatible-eol"><code>backward-compatible-eol</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.50"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.42DdBS.17"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.JXxLz" title="原文 : Enable support for Helidon versions before 3.0.0 (exclusive).">3.0.0より前のHelidonバージョンのサポートを有効にします(除外)。</span></p>

<markup>Until version 3.0.0 (exclusive) there was a trailing end of line added to the signed
data.
To be able to communicate cross versions, we must configure this when talking to older versions of Helidon.
Default value is `false`. In Helidon 2.x, this switch exists as well and the default is `true`, to
allow communication between versions as needed.</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.VPmDa"  title="原文: headers"><code>headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.47gITV" title="原文 : HttpSignHeader[] (SIGNATURE, AUTHORIZATION, CUSTOM)">HttpSignHeader[] (署名、認可、カスタム)</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3KBbIr.spl1" title="原文 : Add a header that is validated on inbound requests.">インバウンド・リクエストでバリデートされたヘッダーを追加します。</span> <span class="merged" id="all.3KBbIr.spl2" title="原文 : Provider may support more than one header to validate.">プロバイダは、バリデートする複数のヘッダーをサポートできます。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.37W3Ww"  title="原文: inbound.keys"><code>inbound.keys</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2KfiJs" title="原文 : InboundClientDefinition[]"><router-link to="/config/io_helidon_security_providers_httpsign_InboundClientDefinition">InboundClientDefinition[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.zvGrY.spl1" title="原文 : Add inbound configuration.">インバウンド構成を追加します。</span> <span class="merged" id="all.zvGrY.spl2" title="原文 : This is used to validate signature and authenticate the party.">これは、シグネチャをバリデートし、パーティを認証するために使用されます。</span> </p>

<markup>The same can be done through configuration:
&lt;pre&gt;
{
 name = "http-signatures"
 class = "HttpSignProvider"
 http-signatures {
     inbound {
         # This configures the InboundClientDefinition
         keys: [
         {
             key-id = "service1"
             hmac.secret = "${CLEAR=password}"
         }]
     }
 }
}
&lt;/pre&gt;</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.5"  title="原文: optional"><code>optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.51"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.xEiHU.24"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.pj5S.spl1" title="原文 : Set whether the signature is optional.">シグネチャがオプションかどうかを設定します。</span> <span class="merged" id="all.pj5S.spl2" title="原文 : If set to true (default), this provider will SecurityResponse.SecurityStatus#ABSTAIN from this request if signature is not present.">true (デフォルト)に設定すると、シグネチャが存在しない場合、このプロバイダはこのリクエストからSecurityResponse.SecurityStatus#ABSTAINになります。</span> <span class="merged" id="all.pj5S.spl3" title="原文 : If set to false, this provider will SecurityResponse.SecurityStatus#FAILURE fail if signature is not present.">falseに設定すると、シグネチャが存在しない場合、このプロバイダはSecurityResponse.SecurityStatus#FAILUREに失敗します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.46DWSr.4"  title="原文: outbound"><code>outbound</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4bsOHT.1" title="原文 : OutboundConfig"><router-link to="/config/io_helidon_security_providers_common_OutboundConfig">OutboundConfig</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3bBauz.spl1" title="原文 : Add outbound targets to this builder.">このビルダーにアウトバウンド・ターゲットを追加します。</span> <span class="merged" id="all.3bBauz.spl2" title="原文 : The targets are used to chose what to do for outbound communication.">ターゲットは、アウトバウンド通信の処理を選択するために使用されます。</span> <span class="merged" id="all.3bBauz.spl3" title="原文 : The targets should have OutboundTargetDefinition attached through OutboundTarget.Builder#customObject(Class, Object) to tell us how to sign the request.">リクエストの署名方法を指示するには、ターゲットにOutboundTarget.Builder#customObject(Class, Object)を介してOutboundTargetDefinitionがアタッチされている必要があります。</span> </p>

<markup>The same can be done through configuration:
&lt;pre&gt;
{
 name = "http-signatures"
 class = "HttpSignProvider"
 http-signatures {
     targets: [
     {
         name = "service2"
         hosts = ["localhost"]
         paths = ["/service2/.*"]</markup>
<markup>         # This configures the OutboundTargetDefinition
         signature {
             key-id = "service1"
             hmac.secret = "${CLEAR=password}"
         }
     }]
 }
}
&lt;/pre&gt;</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.10Bdny.3"  title="原文: realm"><code>realm</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.97"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class=""><span class="merged" id="all.V69kn.2"  title="原文: helidon"><code>helidon</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.1u4U4Y" title="原文 : Realm to use for challenging inbound requests that do not have &quot;Authorization&quot; header in case header is HttpSignHeader#AUTHORIZATION and singatures are not optional.">ヘッダーがHttpSignHeader#AUTHORIZATIONで、シンガチャはオプションではない場合に、"Authorization"ヘッダーを持たない困難なインバウンド・リクエストに使用するレルム。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1Kg8s9"  title="原文: sign-headers"><code>sign-headers</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2b1kVF" title="原文 : HeadersConfig[]"><router-link to="/config/io_helidon_security_providers_httpsign_SignedHeadersConfig_HeadersConfig">HeadersConfig[]</router-link></span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1HqCHn" title="原文 : Override the default inbound required headers (e.g. headers that MUST be signed and headers that MUST be signed IF present).">デフォルトのインバウンド必須ヘッダーを上書きします (たとえば、署名する必要があるヘッダーおよび署名が必要なヘッダー)。</span></p>

<markup>Defaults:</markup>
<ul class="ulist">
<li>
<p><span class="merged" id="all.2g2VRF" title="原文 : get, head, delete methods: date, (request-target), host are mandatory; authorization if present (unless we are creating/validating the HttpSignHeader#AUTHORIZATION ourselves">get、head、deleteメソッド: 日付、 (request-target)ホストは必須です。存在する場合は認可します(HttpSignHeader#AUTHORIZATION自体を作成/検証する場合を除く)</span></p>

</li>
<li>
<p><span class="merged" id="all.2C55p2" title="原文 : put, post: same as above, with addition of: content-length, content-type and digest if present">put、post: 上記と同じ、追加: content-length、content-typeおよびダイジェスト(存在する場合)</span></p>

</li>
<li>
<p><span class="merged" id="all.31cgqt" title="原文 : for other methods: date, (request-target)">他のメソッド用: date, (request-target)</span></p>

</li>
</ul>

<p><span class="merged" id="all.1Ov2in" title="原文 : Note that this provider DOES NOT validate the &quot;Digest&quot; HTTP header, only the signature.">このプロバイダは、「ダイジェスト」HTTPヘッダーをバリデートせず、シグネチャのみがバリデートされることに注意してください。</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
