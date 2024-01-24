<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2eY4dw" title="原文 : SecurityHandler (webserver.security) Configuration">SecurityHandler (webserver.security)構成</span></dt>
<dd slot="desc"><p><span class="merged" id="all.223NAj" title="原文 : Type: io.helidon.webserver.security.SecurityHandler">タイプ: <a href="/apidocs/io.helidon.webserver.security/io/helidon/webserver/security/SecurityHandler.html" target="_blank">io.helidon.webserver.security.SecurityHandler</a></span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_configuration_options"><span class="merged" id="all.3SKgM1.100"  title="原文:: Configuration options">構成オプション</span></h2>
<div class="section">
<div class="block-title"><span class="merged" id="all.271SGn.95" title="原文 : Optional configuration options"><span>オプションの構成オプション</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.102"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.102"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.102"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.102"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.p5ZxK.1"  title="原文: audit"><code>audit</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.156"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3FPObA.1" title="原文 : Whether to audit this request - defaults to false, if enabled, request is audited with event type &quot;request&quot;.">このリクエストを監査するかどうか - 有効にすると、リクエストはイベント・タイプ"request"で監査されます。</span></p>

<markup>@return whether to audit</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3xn8XM.1"  title="原文: audit-event-type"><code>audit-event-type</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.195"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2FtClh.1" title="原文 : Override for event-type, defaults to SecurityHandler#DEFAULT_AUDIT_EVENT_TYPE.">イベント・タイプのオーバーライド。デフォルトは<code>SecurityHandler#DEFAULT_AUDIT_EVENT_TYPE</code>です。</span></p>

<markup>@return audit event type to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4BawbV.1"  title="原文: audit-message-format"><code>audit-message-format</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.196"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2ZQvu4.1" title="原文 : Override for audit message format, defaults to SecurityHandler#DEFAULT_AUDIT_MESSAGE_FORMAT.">監査メッセージ形式をオーバーライドします。デフォルトは<code>SecurityHandler#DEFAULT_AUDIT_MESSAGE_FORMAT</code>です。</span></p>

<markup>@return audit message format to use</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j.4"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.157"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3IJKYk.1" title="原文 : If called, request will go through authentication process - defaults to false (even if authorize is true).">呼び出された場合、リクエストは認証プロセスを通過 - デフォルトはfalseです(authorizeがtrueの場合でも)。</span></p>

<markup>@return whether to authenticate or not</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Y1gjZ.1"  title="原文: authentication-optional"><code>authentication-optional</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.158"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4DKBL0.1" title="原文 : If called, authentication failure will not abort request and will continue as anonymous (defaults to false).">呼び出された場合、認証失敗はリクエストを中断せず、匿名として続行されます(デフォルトはfalse)。</span></p>

<markup>@return whether authn is optional</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3qmLSw.1"  title="原文: authenticator"><code>authenticator</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.197"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.MKrKM.1.spl1" title="原文 : Use a named authenticator (as supported by security - if not defined, default authenticator is used).">名前付きオーセンティケータを使用します(セキュリティでサポートされています。 - 定義されていない場合は、デフォルトのオーセンティケータが使用されます)。</span> <span class="merged" id="all.MKrKM.1.spl2" title="原文 : Will enable authentication.">認証を有効にします。</span> </p>

<markup>@return name of authenticator as configured in io.helidon.security.Security</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1HNgtx.1"  title="原文: authorize"><code>authorize</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2XHIO8.159"  title="原文:: boolean">boolean</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4IXpnk.1" title="原文 : Enable authorization for this route.">このルートの認可を有効にします。</span></p>

<markup>@return whether to authorize</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2DFdTB.1"  title="原文: authorizer"><code>authorizer</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2uEvOb.198"  title="原文:: string">文字列</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.7fsG.1.spl1" title="原文 : Use a named authorizer (as supported by security - if not defined, default authorizer is used, if none defined, all is permitted).">名前付き認可プロバイダの使用(セキュリティでサポート) - 定義されていない場合、デフォルトの認可プロバイダが使用され、定義されていない場合はすべてが許可されます)。</span> <span class="merged" id="all.7fsG.1.spl2" title="原文 : Will enable authorization.">認可を有効にします。</span> </p>

<markup>@return name of authorizer as configured in io.helidon.security.Security</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3AXGEl.1"  title="原文: roles-allowed"><code>roles-allowed</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.34"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4X3fcJ.1.spl1" title="原文 : An array of allowed roles for this path - must have a security provider supporting roles (either authentication or authorization provider).">このパスに許可されるロールの配列 - ロールをサポートするセキュリティ・プロバイダ(認証プロバイダまたは認可プロバイダ)が必要です。</span> <span class="merged" id="all.4X3fcJ.1.spl2" title="原文 : This method enables authentication and authorization (you can disable them again by calling SecurityHandler#skipAuthorization() and #authenticationOptional() if needed).">このメソッドは、認証および認可を有効にします(必要に応じてSecurityHandler#skipAuthorization()および#authenticationOptional()をコールすることで、再度無効化できます)。</span> </p>

<markup>@return if subject is any of these roles, allow access</markup>
</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.5HZ82.9"  title="原文: sockets"><code>sockets</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.V60k5.35"  title="原文:: string[]">string[]</span></p>

</doc-view>
</td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3eXDgs.1.spl1" title="原文 : List of sockets this configuration should be applied to.">この構成を適用するソケットのリスト。</span> <span class="merged" id="all.3eXDgs.1.spl2" title="原文 : If empty, the configuration is applied to all configured sockets.">空の場合、構成はすべての構成済みソケットに適用されます。</span> </p>

<markup>@return list of sockets</markup>
</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
