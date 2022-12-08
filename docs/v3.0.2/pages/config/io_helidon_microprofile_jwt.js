<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_configuration_options"><span class="merged" id="all.276fEP"  title="原文:: Configuration Options">構成オプション</span></h2>
<div class="section">
<p><span class="merged" id="all.1b5TJL.1" title="原文 : MicroProfile configuration options:">MicroProfile構成オプション:</span></p>


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
<th><span class="merged" id="all.2XKMH3.30"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.30"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.30"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.30"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4a3VL7.1"  title="原文: mp.jwt.verify.publickey"><code>mp.jwt.verify.publickey</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.42"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.DDbiB.1" title="原文 : The property allows the Public Verification Key text itself to be supplied as a string.">このプロパティを使用すると、パブリック検証キーのテキスト自体を文字列として指定できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1XwBfY"  title="原文: mp.jwt.verify.publickey.location"><code>mp.jwt.verify.publickey.location</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.43"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.19aiza.spl1" title="原文 : The property allows for an external or internal location of Public Verification Key to be specified.">このプロパティでは、公開検証キーの外部または内部のロケーションを指定できます。</span> <span class="merged" id="all.19aiza.spl2" title="原文 : The value may be a relative path or a URL.">値は相対パスまたはURLです。</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xlI4Y"  title="原文: mp.jwt.verify.publickey.algorithm"><code>mp.jwt.verify.publickey.algorithm</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.44"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3ZeQhA.spl1" title="原文 : The configuration property allows for specifying which Public Key Signature Algorithm is supported by the MP JWT endpoint.">構成プロパティでは、MP JWTエンドポイントでサポートされる公開キー・シグネチャ・アルゴリズムを指定できます。</span> <span class="merged" id="all.3ZeQhA.spl2" title="原文 : This property can be set to either RS256 or ES256.">このプロパティは、<code>RS256</code>または<code>ES256</code>のいずれかに設定できます。</span> <span class="merged" id="all.3ZeQhA.spl3" title="原文 : Default value is RS256.">デフォルト値は<code>RS256</code>です。</span> <span class="merged" id="all.3ZeQhA.spl4" title="原文 : Support for the other asymmetric signature algorithms such as RS512, ES512 and others is optional."><code>RS512</code>、<code>ES512</code>などの他の非対称シグネチャ・アルゴリズムのサポートはオプションです。</span> </td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4WZWC7" title="原文 : Optional configuration options:">オプションの構成オプション:</span></p>


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
<th><span class="merged" id="all.2XKMH3.31"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.31"  title="原文:: type">type</span></th>
<th><span class="merged" id="all.G3u1e.31"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.31"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.31"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42DdBS.8"  title="原文: false"><code>false</code></span></td>
<td class=""><span class="merged" id="all.4KM3rs.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.32"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.xEiHU.15"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.3BPlzk" title="原文 : Whether to attempt authentication">認証を試行するかどうか</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.33"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.xEiHU.16"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.4G3ZuY" title="原文 : Whether to attempt identity propagation/JWT creation">アイデンティティ伝播/JWT作成を試行するかどうか</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.45"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.26725z"  title="原文: USER"><code>USER</code></span></td>
<td class=""><span class="merged" id="all.2E1iLT" title="原文 : Whether we authenticate a user or a service (other option is SERVICE)">ユーザーとサービスのどちらを認証するか(その他のオプションはSERVICE)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zlnZ9"  title="原文: atn-token"><code>atn-token</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.46"  title="原文:: string">文字列</span></td>

<td class=""><span class="merged" id="all.2EkZiB" title="原文 : A group for configuring authentication of the request">リクエストの認証を構成するためのグループ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1RN5FE"  title="原文: atn-token.verify-signature"><code>atn-token.verify-signature</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.34"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.xEiHU.17"  title="原文: true"><code>true</code></span></td>
<td class=""><span class="merged" id="all.3ocDX2.spl1" title="原文 : Whether to verify signature in incoming JWT.">受信JWTのシグネチャを検証するかどうか。</span> <span class="merged" id="all.3ocDX2.spl2" title="原文 : If disabled, ANY JWT will be accepted">無効にすると、<em>どの</em>JWTも受け入れられます</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2cNZqK"  title="原文: atn-token.jwt-audience"><code>atn-token.jwt-audience</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.47"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4IVsQ5.spl1" title="原文 : Expected audience of the JWT.">JWTの対象読者が必要です。</span> <span class="merged" id="all.4IVsQ5.spl2" title="原文 : If not defined, any audience is accepted (and we may accept JWT not inteded for us)">定義されていない場合、オーディエンスは受け入れられます(JWTは受け入れられません)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.436rIa"  title="原文: atn-token.jwk.resource.*"><code>atn-token.jwk.resource.*</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.48"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2IbXDf.spl1" title="原文 : Configuration of the JWK to obtain key(s) to validate signatures of inbound token.">インバウンド・トークンのシグネチャをバリデートするキーを取得するためのJWKの構成。</span> <span class="merged" id="all.2IbXDf.spl2" title="原文 : The JWK should contain public keys.">JWKには公開キーを含める必要があります。</span> <span class="merged" id="all.2IbXDf.spl3" title="原文 : This may be: jwk.resource.path, jwk.resource.resource-path, jwk.resource.url, jwk.resource.content-plain (actual JSON string), jwk.resource.content (base64)">次のようになります: jwk.resource.path、jwk.resource.resource-path、jwk.resource.url、jwk.resource.content-plan (実際のJSON文字列)、jwk.resource.content (base64)</span> </td>
</tr>
<tr>
<td class=""><span class="merged" id="all.y0cAd"  title="原文: atn-token.handler"><code>atn-token.handler</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.49"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.44Sjoc" title="原文 : Authorization header with `bearer ` prefix">プレフィクスが`bearer`の<code>Authorization</code>ヘッダー</span></td>
<td class=""><span class="merged" id="all.3rn7VN" title="原文 : A handler configuration for inbound token - e.g. how to extract it">インバウンド・トークンのハンドラ構成 - 例:抽出方法</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.YrCkz"  title="原文: atn-token.handler.header"><code>atn-token.handler.header</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.50"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1ZIPQ0" title="原文 : Name of a header the token is expected in">トークンが必要なヘッダーの名前</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ODTDS"  title="原文: atn-token.handler.prefix"><code>atn-token.handler.prefix</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.51"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1oAqAQ" title="原文 : Prefix before the token value (optional)">トークン値の前のプレフィクス(オプション)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2UeouR"  title="原文: atn-token.handler.regexp"><code>atn-token.handler.regexp</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.52"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.YBnak" title="原文 : Regular expression to obtain the token, first matching group is used (optional)">トークンを取得する正規表現。最初に一致したグループが使用されます(オプション)</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.21Q9we"  title="原文: sign-token"><code>sign-token</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.53"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.4ZPrAG" title="原文 : A group for configuring outbound security">アウトバウンド・セキュリティを構成するためのグループ</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.P749k"  title="原文: sign-token.jwk.resource.*"><code>sign-token.jwk.resource.*</code></span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3fJnl5" title="原文 : Configuration of the JWK to use when generating tokens (follows same rules as atn-token.jwk above), this JWK must contain private keys when using asymmetric ciphers">トークンの生成時に使用するJWKの構成(前述のatn-token.jwkと同じルールに従う)。非対称暗号を使用する場合、このJWKには秘密キーを含める必要があります</span></td>
<td class=""><span class="merged" id="all.1jxKXY"  title="原文: sign-token.jwt-issuer"><code>sign-token.jwt-issuer</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.54"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.212d4a" title="原文 : When we issue a new token, this is the issuer to be placed into it (validated by target service)">新しいトークンを発行すると、これがそこに配置される発行者になります(ターゲット・サービスによってバリデートされます)</span></td>
<td class=""><span class="merged" id="all.3uVxDq"  title="原文: sign-token.outbound"><code>sign-token.outbound</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.55"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.sEyEG" title="原文 : A group for configuring outbound rules (based on transport, host and.or path)">アウトバウンド・ルールを構成するためのグループ(トランスポート、ホストand.orパスに基づく)</span></td>
<td class=""><span class="merged" id="all.34USCk"  title="原文: sign-token.outbound.*.name"><code>sign-token.outbound.*.name</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.56"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.3jJ4Ga" title="原文 : A short descriptive name for configured target service(s)">構成されたターゲット・サービスの短い説明的な名前</span></td>
<td class=""><span class="merged" id="all.FNfFZ"  title="原文: sign-token.outbound.*.transports"><code>sign-token.outbound.*.transports</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.57"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.1qcdPQ"  title="原文:: any">any</span></td>
<td class=""><span class="merged" id="all.3Um51M" title="原文 : An array of transports this outbound matches (e.g. https)">このアウトバウンドが一致するトランスポートの配列(httpsなど)</span></td>
<td class=""><span class="merged" id="all.1WkbJ"  title="原文: sign-token.outbound.*.hosts"><code>sign-token.outbound.*.hosts</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.58"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.1qcdPQ.1"  title="原文:: any">any</span></td>
<td class=""><span class="merged" id="all.3kTSgs" title="原文 : An array of hosts this outbound matches, may use * as a wild-card (e.g. *.oracle.com)">このアウトバウンド一致するホストの配列。ワイルドカードとして*を使用できます(*.oracle.comなど)</span></td>
<td class=""><span class="merged" id="all.4PiPNZ"  title="原文: sign-token.outbound.*.paths"><code>sign-token.outbound.*.paths</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.59"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.1qcdPQ.2"  title="原文:: any">any</span></td>
<td class=""><span class="merged" id="all.VgyuB" title="原文 : An array of paths on the host this outbound matches, may use * as a wild-card (e.g. /some/path/*)">このアウトバウンドが一致するホスト上のパスの配列。ワイルドカードとして*を使用できます(例: /some/path/*))</span></td>
<td class=""><span class="merged" id="all.2bBss7"  title="原文: sign-token.outbound.*.outbound-token"><code>sign-token.outbound.*.outbound-token</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.60"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.44Sjoc.1" title="原文 : Authorization header with `bearer ` prefix">プレフィクスが`bearer`の<code>Authorization</code>ヘッダー</span></td>
<td class=""><span class="merged" id="all.3ypsU4" title="原文 : Configuration of outbound token handler (same as atn-token.handler)">アウトバウンド・トークン・ハンドラの構成(atn-token.handlerと同じ)</span></td>
<td class=""><span class="merged" id="all.4OwxVe"  title="原文: sign-token.outbound.*.outbound-token.format"><code>sign-token.outbound.*.outbound-token.format</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.61"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1Rp6yY" title="原文 : Java text format for generating the value of outbound token header (e.g. &quot;bearer %1$s&quot;)">アウトバウンド・トークン・ヘッダーの値を生成するためのJavaテキスト形式(例: "bearer %1$s ")</span></td>
<td class=""><span class="merged" id="all.7XoZr"  title="原文: sign-token.outbound.*.jwk-kid"><code>sign-token.outbound.*.jwk-kid</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.62"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.1uzqQ0.spl1" title="原文 : If this key is defined, we are generating a new token, otherwise we propagate existing.">このキーが定義されている場合は新しいトークンを生成し、定義されていない場合は既存のトークンを伝播します。</span> <span class="merged" id="all.1uzqQ0.spl2" title="原文 : Defines the key id of a key definition in the JWK file to use for signing the outbound token">アウトバウンド・トークンの署名に使用するJWKファイルのキー定義のキーIDを定義</span> </td>
<td class=""><span class="merged" id="all.2CQmrC"  title="原文: sign-token.outbound.*.jwt-kid"><code>sign-token.outbound.*.jwt-kid</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.63"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.2nxcps" title="原文 : A key to use in the generated JWT - this is for the other service to locate the verification key in their JWK">生成されたJWTで使用するキー - これは、他のサービスがJWKで検証キーを検索するためのものです</span></td>
<td class=""><span class="merged" id="all.2TS7AT"  title="原文: sign-token.outbound.*.jwt-audience"><code>sign-token.outbound.*.jwt-audience</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.64"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><span class="merged" id="all.wOv2A" title="原文 : Audience this key is generated for (e.g. http://www.example.org/api/myService) - validated by the other service">このキーが生成されるオーディエンス(<a class="bare" href="http://www.example.org/api/myService" target="_blank">http://www.example.org/api/myService</a>など) - 他のサービスによってバリデートされました</span></td>
<td class=""><span class="merged" id="all.EfDmi"  title="原文: sign-token.outbound.*.jwt-not-before-seconds"><code>sign-token.outbound.*.jwt-not-before-seconds</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2uEvOb.65"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.4XADpA"  title="原文: 5"><code>5</code></span></td>
<td class=""><span class="merged" id="all.25NfJc.spl1" title="原文 : Makes this key valid this amount of seconds into the past.">このキーを過去のこの秒数だけ有効にします。</span> <span class="merged" id="all.25NfJc.spl2" title="原文 : Allows a certain time-skew for the generated token to be valid before current time (e.g. when we expect a certain misalignment of clocks)">生成されたトークンが現在の時間より前に有効になるように特定の時間誤差を許可します(たとえば、クロックの特定の境界整列が誤っていると予想される場合)</span> </td>
<td class=""><span class="merged" id="all.2LBnXR"  title="原文: sign-token.outbound.*.jwt-validity-seconds"><code>sign-token.outbound.*.jwt-validity-seconds</code></span></td>
</tr>
</tbody>
</table>
</div>

</div>

</doc-view>
