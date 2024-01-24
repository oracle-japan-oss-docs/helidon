<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.14"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.13" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.1N6U52.10" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#maven-coordinates')" to="#maven-coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.6" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.6" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.9" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.10" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.7" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2zAIy9.7" title="原文 : Reference"><router-link @click.native="this.scrollFix('#_reference')" to="#_reference">リファレンス</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.13"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.1dQCDT" title="原文 : JSON Web Tokens (JWT) are an open, industry standard (RFC 7519) method for representing claims securely between two parties.">JSON Webトークン(JWT)は、2つのパーティ間で安全に請求を表すための業界標準のオープンな<a href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank">(RFC 7519)</a>メソッドです。</span></p>

<p><span class="merged" id="all.Zk08G.spl1" title="原文 : JSON Web Token defines a compact and self-contained way for securely transmitting information between parties as a JSON object.">JSON Web Tokenは、関係者間で情報をJSONオブジェクトとして安全に転送するための、コンパクトで自己完結した方法を定義します。</span> <span class="merged" id="all.Zk08G.spl2" title="原文 : With JWT Auth you can integrate security features such as single sign on into your Helidon MP applications.">JWT認証を使用すると、シングル・サインオンなどのセキュリティ機能をHelidon MPアプリケーションに統合できます。</span> </p>

</div>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.12"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.M48KC" title="原文 : To enable JWT Authentication either add a dependency on the helidon-microprofile bundle or add the following dependency to your project’s pom.xml (see Managing Dependencies).">JWT認証を有効にするには、<router-link to="/mp/introduction/microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.jwt&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile-jwt-auth&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.6"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.HTwg7.spl1" title="原文 : The main configuration point for JWT Auth is a JAX-RS Application class.">JWT認証の主な構成ポイントは、JAX-RSアプリケーション・クラスです。</span> <span class="merged" id="all.HTwg7.spl2" title="原文 : As this class is discovered using CDI, it must have a bean defining annotation.">このクラスはCDIを使用して検出されるため、Bean定義の注釈が必要です。</span> </p>

<p><span class="merged" id="all.2yXu8M" title="原文 : Minimal required setup is done using @LoginConfig(authMethod = &quot;MP-JWT&quot;):">最小限の設定は、<code>@LoginConfig(authMethod = "MP-JWT")</code>を使用して行います:</span></p>

<markup
lang="java"

>@LoginConfig(authMethod = "MP-JWT")
@ApplicationScoped
public class ProtectedApplication extends Application{
}</markup>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.6"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.3dixF7" title="原文 : The following interfaces and annotations are used to work with JWT in Helidon MP:">次のインタフェースおよび注釈は、Helidon MPでJWTを操作するために使用されます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2lywCf" title="原文 : JsonWebToken - an interface used in CDI beans (@RequestScoped) dependency injection to obtain the JWT of the currently executing caller."><code>JsonWebToken</code> - 現在実行中のコール元のJWTを取得するためにCDI bean <em>(@RequestScoped)</em>依存関係インジェクションで使用されるインタフェース。</span></p>

</li>
<li>
<p><span class="merged" id="all.nGxJP" title="原文 : @Claim - an annotation used by CDI bean (@RequestScoped) dependency injection to obtain individual claims from the caller’s JWT."><code>@Claim</code> - コール元JWTから個々の要求を取得するためにCDI bean <em>(@RequestScoped)</em>依存関係インジェクションで使用される注釈。</span></p>

</li>
<li>
<p><span class="merged" id="all.eNFFj" title="原文 : ClaimValue - a proxy interface used with @Claim annotation to оbtain the value of a claim by calling getValue()."><code>ClaimValue</code> - <code>@Claim</code>注釈とともに使用されるプロキシ・インタフェースで、<code>getValue()</code>をコールして請求の値を保持します。</span></p>

</li>
</ul>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.10"  title="原文:: Configuration">構成</span></h2>
<div class="section">

<h3 id="_configuration_options"><span class="merged" id="all.3SKgM1.108"  title="原文:: Configuration options">構成オプション</span></h3>
<div class="section">
<div class="block-title"><span class="merged" id="all.19DsQD.1" title="原文 : MicroProfile configuration options:"><span>MicroProfile構成オプション:</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.113"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.111"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.113"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.114"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4a3VL7.1"  title="原文: mp.jwt.verify.publickey"><code>mp.jwt.verify.publickey</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.206"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.DDbiB.1" title="原文 : The property allows the Public Verification Key text itself to be supplied as a string.">このプロパティを使用すると、パブリック検証キーのテキスト自体を文字列として指定できます。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1XwBfY.1"  title="原文: mp.jwt.verify.publickey.location"><code>mp.jwt.verify.publickey.location</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.207"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.19aiza.1.spl1" title="原文 : The property allows for an external or internal location of Public Verification Key to be specified.">このプロパティでは、公開検証キーの外部または内部のロケーションを指定できます。</span> <span class="merged" id="all.19aiza.1.spl2" title="原文 : The value may be a relative path or a URL.">値は相対パスまたはURLです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xlI4Y.1"  title="原文: mp.jwt.verify.publickey.algorithm"><code>mp.jwt.verify.publickey.algorithm</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.208"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ZeQhA.1.spl1" title="原文 : The configuration property allows for specifying which Public Key Signature Algorithm is supported by the MP JWT endpoint.">構成プロパティでは、MP JWTエンドポイントでサポートされる公開キー・シグネチャ・アルゴリズムを指定できます。</span> <span class="merged" id="all.3ZeQhA.1.spl2" title="原文 : This property can be set to either RS256 or ES256.">このプロパティは、<code>RS256</code>または<code>ES256</code>のいずれかに設定できます。</span> <span class="merged" id="all.3ZeQhA.1.spl3" title="原文 : Default value is RS256.">デフォルト値は<code>RS256</code>です。</span> <span class="merged" id="all.3ZeQhA.1.spl4" title="原文 : Support for the other asymmetric signature algorithms such as RS512, ES512 and others is optional."><code>RS512</code>、<code>ES512</code>などの他の非対称シグネチャ・アルゴリズムのサポートはオプションです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3PUhRu.1"  title="原文: mp.jwt.verify.issuer"><code>mp.jwt.verify.issuer</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.209"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.18tKX2.1" title="原文 : Configuration key for expected issuer of incoming tokens.">受信トークンの予想される発行者の構成キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.Ugb0j.1"  title="原文: mp.jwt.verify.audiences"><code>mp.jwt.verify.audiences</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.210"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.Ymb3j.1" title="原文 : Configuration key for expected audiences of incoming tokens.">受信トークンの予想されるオーディエンスの構成キー。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1k6ZMB.1"  title="原文: mp.jwt.verify.token.age"><code>mp.jwt.verify.token.age</code></span></td>
<td class=""><span class="merged" id="all.N4Pvl.73"  title="原文:: int">int</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1RQbFZ.1.spl1" title="原文 : Max number of seconds since token issue time.">トークン発行時間からの最大秒数。</span> <span class="merged" id="all.1RQbFZ.1.spl2" title="原文 : If this number of second accedes configured value, validation will fail.">この秒数のアクセントが構成された値の場合、バリデーションは失敗します。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1e7ExU.1"  title="原文: mp.jwt.verify.clock.skew"><code>mp.jwt.verify.clock.skew</code></span></td>
<td class=""><span class="merged" id="all.N4Pvl.74"  title="原文:: int">int</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2NslVK.1" title="原文 : Number of seconds for the clock skew during the token age verification and expiry.">トークン有効期間検証および有効期限中のクロック・スキューの秒数。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3WwH9R.1"  title="原文: mp.jwt.token.cookie"><code>mp.jwt.token.cookie</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.211"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1cb9T5.1" title="原文 : Cookie property name which is expected to contain a JWT token.">JWTトークンを含める必要があるCookieプロパティ名。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4eWdpy.1"  title="原文: mp.jwt.token.header"><code>mp.jwt.token.header</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.212"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2Xt0Ko.1" title="原文 : Header name which is expected to contain a JWT token.">JWTトークンを含む必要があるヘッダー名。</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3bRZVc.1"  title="原文: mp.jwt.decrypt.key.location"><code>mp.jwt.decrypt.key.location</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.213"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1WBvOA.1.spl1" title="原文 : The property allows for an external or internal location of Private Decryption Key to be specified.">このプロパティでは、プライベート復号化キーの外部または内部のロケーションを指定できます。</span> <span class="merged" id="all.1WBvOA.1.spl2" title="原文 : The value may be a relative path or a URL.">値は相対パスまたはURLです。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.l8myK.1"  title="原文: mp.jwt.decrypt.key.algorithm"><code>mp.jwt.decrypt.key.algorithm</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.214"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2mrvgO.1.spl1" title="原文 : The configuration property allows for specifying which key management algorithm is supported by the MP JWT endpoint.">構成プロパティでは、MP JWTエンドポイントでサポートされているキー管理アルゴリズムを指定できます。</span> <span class="merged" id="all.2mrvgO.1.spl2" title="原文 : Supported algorithms are either RSA-OAEP or RSA-OAEP-256.">サポートされているアルゴリズムは、<code>RSA-OAEP</code>または<code>RSA-OAEP-256</code>です。</span> <span class="merged" id="all.2mrvgO.1.spl3" title="原文 : If no algorithm is set, both algorithms must be accepted.">アルゴリズムが設定されていない場合は、両方のアルゴリズムを受け入れる必要があります。</span> </p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<div class="block-title"><span class="merged" id="all.4Bc7mn.1" title="原文 : Helidon configuration options:"><span>Helidon構成オプション:</span></span></div>
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
<th><span class="merged" id="all.2XKMH3.114"  title="原文:: key">キー</span></th>
<th><span class="merged" id="all.2ZwVVB.112"  title="原文:: type">タイプ</span></th>
<th><span class="merged" id="all.G3u1e.114"  title="原文:: default value">デフォルト値</span></th>
<th><span class="merged" id="all.20ls8M.115"  title="原文:: description">説明</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.4Zagyj.8"  title="原文: optional"><code>optional</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.165"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.42DdBS.53"  title="原文: false"><code>false</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4KM3rs.1.spl1" title="原文 : If set to true, failure to authenticate will return ABSTAIN result instead of FAILURE."><code>true</code>に設定した場合、認証に失敗すると、<code>FAILURE</code>ではなく<code>ABSTAIN</code>の結果が返されます。</span> <span class="merged" id="all.4KM3rs.1.spl2" title="原文 : This is an important distinction when more than one provider is used">これは、複数のプロバイダを使用する場合の重要な違いです</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.24OC9j.5"  title="原文: authenticate"><code>authenticate</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.166"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.xEiHU.85"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3BPlzk.1" title="原文 : Whether to attempt authentication">認証を試行するかどうか</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3SEgfv.4"  title="原文: propagate"><code>propagate</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.167"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.xEiHU.86"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.4G3ZuY.1" title="原文 : Whether to attempt identity propagation/JWT creation">アイデンティティ伝播/JWT作成を試行するかどうか</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4V6kvV.6"  title="原文: principal-type"><code>principal-type</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.215"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.26725z.8"  title="原文: USER"><code>USER</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.2E1iLT.1" title="原文 : Whether we authenticate a user or a service (other option is SERVICE)">ユーザーとサービスのどちらを認証するか(その他のオプションはSERVICE)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3zlnZ9.2"  title="原文: atn-token"><code>atn-token</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.216"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2EkZiB.1" title="原文 : A group for configuring authentication of the request">リクエストの認証を構成するためのグループ</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1RN5FE.2"  title="原文: atn-token.verify-signature"><code>atn-token.verify-signature</code></span></td>
<td class=""><span class="merged" id="all.2XHIO8.168"  title="原文:: boolean">boolean</span></td>
<td class=""><span class="merged" id="all.xEiHU.87"  title="原文: true"><code>true</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ocDX2.1.spl1" title="原文 : Whether to verify signature in incoming JWT.">受信JWTのシグネチャを検証するかどうか。</span> <span class="merged" id="all.3ocDX2.1.spl2" title="原文 : If disabled, ANY JWT will be accepted">無効にすると、<em>どの</em>JWTも受け入れられます</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2cNZqK.2"  title="原文: atn-token.jwt-audience"><code>atn-token.jwt-audience</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.217"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4IVsQ5.1.spl1" title="原文 : Expected audience of the JWT.">JWTの対象読者が必要です。</span> <span class="merged" id="all.4IVsQ5.1.spl2" title="原文 : If not defined, any audience is accepted (and we may accept JWT not inteded for us)">定義されていない場合、オーディエンスは受け入れられます(JWTは受け入れられません)</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4QJKdb.2"  title="原文: atn-token.jwk.resource"><code>atn-token.jwk.resource</code></span></td>
<td class=""><span class="merged" id="all.21ZylF.23" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2JpPaV.1.spl1" title="原文 : Configuration of the JWK to obtain key(s) to validate signatures of inbound token.">インバウンド・トークンのシグネチャをバリデートするキーを取得するためのJWKの構成。</span> <span class="merged" id="all.2JpPaV.1.spl2" title="原文 : The JWK should contain public keys.">JWKには公開キーを含める必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.y0cAd.2"  title="原文: atn-token.handler"><code>atn-token.handler</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.218"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.44Sjoc.2" title="原文 : Authorization header with `bearer ` prefix">プレフィクスが`bearer`の<code>Authorization</code>ヘッダー</span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3rn7VN.1" title="原文 : A handler configuration for inbound token - e.g. how to extract it">インバウンド・トークンのハンドラ構成 - 例:抽出方法</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.YrCkz.1"  title="原文: atn-token.handler.header"><code>atn-token.handler.header</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.219"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1ZIPQ0.1" title="原文 : Name of a header the token is expected in">トークンが必要なヘッダーの名前</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1ODTDS.1"  title="原文: atn-token.handler.prefix"><code>atn-token.handler.prefix</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.220"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1oAqAQ.1" title="原文 : Prefix before the token value (optional)">トークン値の前のプレフィクス(オプション)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2UeouR.1"  title="原文: atn-token.handler.regexp"><code>atn-token.handler.regexp</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.221"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.YBnak.1" title="原文 : Regular expression to obtain the token, first matching group is used (optional)">トークンを取得する正規表現。最初に一致したグループが使用されます(オプション)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.21Q9we.2"  title="原文: sign-token"><code>sign-token</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.222"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.4ZPrAG.1" title="原文 : A group for configuring outbound security">アウトバウンド・セキュリティを構成するためのグループ</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.xtSaw.2"  title="原文: sign-token.jwk.resource"><code>sign-token.jwk.resource</code></span></td>
<td class=""><span class="merged" id="all.21ZylF.24" title="原文 : Resource"><router-link to="/config/io_helidon_common_configurable_Resource">Resource</router-link></span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3pBzxD.1.spl1" title="原文 : Configuration of the JWK to use when generating tokens (follows the same rules as atn-token.jwk above).">トークンの生成時に使用するJWKの構成(前述のatn-token.jwkと同じルールに従います)。</span> <span class="merged" id="all.3pBzxD.1.spl2" title="原文 : The JWK must contain private keys when using asymmetric ciphers.">非対称暗号を使用する場合は、JWKに秘密キーが含まれている必要があります。</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1jxKXY.2"  title="原文: sign-token.jwt-issuer"><code>sign-token.jwt-issuer</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.223"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.212d4a.1" title="原文 : When we issue a new token, this is the issuer to be placed into it (validated by target service)">新しいトークンを発行すると、これがそこに配置される発行者になります(ターゲット・サービスによってバリデートされます)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3uVxDq.1"  title="原文: sign-token.outbound"><code>sign-token.outbound</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.224"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.sEyEG.1" title="原文 : A group for configuring outbound rules (based on transport, host and.or path)">アウトバウンド・ルールを構成するためのグループ(トランスポート、ホストand.orパスに基づく)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.34USCk.1"  title="原文: sign-token.outbound.*.name"><code>sign-token.outbound.*.name</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.225"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.3jJ4Ga.1" title="原文 : A short descriptive name for configured target service(s)">構成されたターゲット・サービスの短い説明的な名前</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.FNfFZ.1"  title="原文: sign-token.outbound.*.transports"><code>sign-token.outbound.*.transports</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.226"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.1qcdPQ.3"  title="原文:: any">any</span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3Um51M.1" title="原文 : An array of transports this outbound matches (e.g. https)">このアウトバウンドが一致するトランスポートの配列(httpsなど)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WkbJ.1"  title="原文: sign-token.outbound.*.hosts"><code>sign-token.outbound.*.hosts</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.227"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.1qcdPQ.4"  title="原文:: any">any</span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3kTSgs.1" title="原文 : An array of hosts this outbound matches, may use * as a wild-card (e.g. *.oracle.com)">このアウトバウンド一致するホストの配列。ワイルドカードとして*を使用できます(*.oracle.comなど)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4PiPNZ.1"  title="原文: sign-token.outbound.*.paths"><code>sign-token.outbound.*.paths</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.228"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.1qcdPQ.5"  title="原文:: any">any</span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.VgyuB.1" title="原文 : An array of paths on the host this outbound matches, may use * as a wild-card (e.g. /some/path/*)">このアウトバウンドが一致するホスト上のパスの配列。ワイルドカードとして*を使用できます(例: /some/path/*))</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2bBss7.1"  title="原文: sign-token.outbound.*.outbound-token"><code>sign-token.outbound.*.outbound-token</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.229"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.44Sjoc.3" title="原文 : Authorization header with `bearer ` prefix">プレフィクスが`bearer`の<code>Authorization</code>ヘッダー</span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.3ypsU4.1" title="原文 : Configuration of outbound token handler (same as atn-token.handler)">アウトバウンド・トークン・ハンドラの構成(atn-token.handlerと同じ)</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4OwxVe.1"  title="原文: sign-token.outbound.*.outbound-token.format"><code>sign-token.outbound.*.outbound-token.format</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.230"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1Rp6yY.1" title="原文 : Java text format for generating the value of outbound token header (e.g. &quot;bearer %1$s&quot;)">アウトバウンド・トークン・ヘッダーの値を生成するためのJavaテキスト形式(例: "bearer %1$s ")</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.7XoZr.1"  title="原文: sign-token.outbound.*.jwk-kid"><code>sign-token.outbound.*.jwk-kid</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.231"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.1uzqQ0.1.spl1" title="原文 : If this key is defined, we are generating a new token, otherwise we propagate existing.">このキーが定義されている場合は新しいトークンを生成し、定義されていない場合は既存のトークンを伝播します。</span> <span class="merged" id="all.1uzqQ0.1.spl2" title="原文 : Defines the key id of a key definition in the JWK file to use for signing the outbound token">アウトバウンド・トークンの署名に使用するJWKファイルのキー定義のキーIDを定義</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2CQmrC.1"  title="原文: sign-token.outbound.*.jwt-kid"><code>sign-token.outbound.*.jwt-kid</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.232"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.2nxcps.1" title="原文 : A key to use in the generated JWT - this is for the other service to locate the verification key in their JWK">生成されたJWTで使用するキー - これは、他のサービスがJWKで検証キーを検索するためのものです</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2TS7AT.1"  title="原文: sign-token.outbound.*.jwt-audience"><code>sign-token.outbound.*.jwt-audience</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.233"  title="原文:: string">文字列</span></td>
<td class="">&#160;</td>
<td class=""><doc-view>
<p><span class="merged" id="all.wOv2A.1" title="原文 : Audience this key is generated for (e.g. http://www.example.org/api/myService) - validated by the other service">このキーが生成されるオーディエンス(<a class="bare" href="http://www.example.org/api/myService" target="_blank">http://www.example.org/api/myService</a>など) - 他のサービスによってバリデートされました</span></p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.EfDmi.1"  title="原文: sign-token.outbound.*.jwt-not-before-seconds"><code>sign-token.outbound.*.jwt-not-before-seconds</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.234"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.4XADpA.3"  title="原文: 5"><code>5</code></span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.25NfJc.1.spl1" title="原文 : Makes this key valid this amount of seconds into the past.">このキーを過去のこの秒数だけ有効にします。</span> <span class="merged" id="all.25NfJc.1.spl2" title="原文 : Allows a certain time-skew for the generated token to be valid before current time (e.g. when we expect a certain misalignment of clocks)">生成されたトークンが現在の時間より前に有効になるように特定の時間誤差を許可します(たとえば、クロックの特定の境界整列が誤っていると予想される場合)</span> </p>

</doc-view>
</td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2LBnXR.1"  title="原文: sign-token.outbound.*.jwt-validity-seconds"><code>sign-token.outbound.*.jwt-validity-seconds</code></span></td>
<td class=""><span class="merged" id="all.2uEvOb.235"  title="原文:: string">文字列</span></td>
<td class=""><span class="merged" id="all.4772zH.1"  title="原文:: 1 day">1日</span></td>
<td class=""><doc-view>
<p><span class="merged" id="all.37MjZB.1" title="原文 : Token validity in seconds">トークンの有効期間(秒)</span></p>

</doc-view>
</td>
</tr>
</tbody>
</table>
</div>

<p><span class="merged" id="all.4bgSOF" title="原文 : A configuration example in microprofile-config.properties:"><code>microprofile-config.properties</code>の構成例:</span></p>

<markup
lang="properties"

>mp.jwt.verify.issuer=https://{PublicIssuerDomain}/oauth2/default
mp.jwt.verify.publickey.location=${mp.jwt.verify.issuer}/v1/keys</markup>

</div>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.10"  title="原文:: Examples">例</span></h2>
<div class="section">
<markup
lang="java"

>@Path("/hello")
public class HelloResource {

    @GET
    @Produces(TEXT_PLAIN)
    public String hello(@Context SecurityContext context) {
        Optional&lt;Principal&gt; userPrincipal = context.userPrincipal();
        return "Hello, " + userPrincipal.get().getName() + "!";
    }
}</markup>

<p><span class="merged" id="all.QfhpQ" title="原文 : Do not forget to annotate the HelloApplication class to enable JWT:">JWTを有効にするために<code>HelloApplication</code>クラスに注釈を付けることを忘れないでください:</span></p>

<markup
lang="java"

>@LoginConfig(authMethod = "MP-JWT")
@ApplicationScoped
public class HelloApplication extends Application {

    @Override
    public Set&lt;Class&lt;?&gt;&gt; getClasses() {
        return Set.of(HelloResource.class);
    }
}</markup>

<p><span class="merged" id="all.2M7sg6" title="原文 : Add the following configuration in microprofile-config.properties:"><code>microprofile-config.properties</code>に次の構成を追加します:</span></p>

<markup
lang="properties"

>mp.jwt.verify.issuer=https://{IssuerPublicDomain}/oauth2/default
mp.jwt.verify.publickey.location=${mp.jwt.verify.issuer}/v1/keys</markup>

<p><span class="merged" id="all.1Uacyi" title="原文 : Obtain the Security Token from external issuer:">外部発行者からセキュリティ・トークンを取得します:</span></p>

<markup
lang="bash"

>TOKEN=sdf4dDSWFcswdsffDSasEgv...</markup>

<p><span class="merged" id="all.WnSzg" title="原文 : Run the application and execute an http request against it:">アプリケーションを実行し、それに対してhttpリクエストを実行します:</span></p>

<markup
lang="bash"

>curl -X GET -I -H "Authorization: Bearer $TOKEN" http://localhost:8080/hello</markup>

<p><span class="merged" id="all.2ORpC9" title="原文 : The result should be:">結果は次のようになります:</span></p>

<markup
lang="bash"

>HTTP/1.1 200 OK
Date: 08.06.2022 10:33:47 EEST
connection: keep-alive
content-length: 28

Hello, secure@helidon.io!</markup>

<p><span class="merged" id="all.1y3vC1" title="原文 : which means that the request successfully passed authentication.">つまり、リクエストで認証が正常に渡されました。</span></p>

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.8"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">
<p><span class="merged" id="all.uvhip" title="原文 : Learn more about JWT authentication at: Eclipse MicroProfile Interoperable JWT RBAC">JWT認証の詳細:<br><a href="https://download.eclipse.org/microprofile/microprofile-jwt-auth-2.1#_introduction" target="_blank">Eclipse MicroProfile Interoperable JWT RBAC</a></span></p>

</div>


<h2 id="_reference"><span class="merged" id="all.oKAT2.7"  title="原文:: Reference">リファレンス</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.stGik" title="原文 : MicroProfile JWT Auth Spec"><a href="https://download.eclipse.org/microprofile/microprofile-jwt-auth-2.1/microprofile-jwt-auth-spec-2.1.html" target="_blank">MicroProfile JWT認証仕様</a></span></p>

</li>
<li>
<p><span class="merged" id="all.3qbO38" title="原文 : MicroProfile JWT Auth GitHub Repository"><a href="https://github.com/eclipse/microprofile-jwt-auth" target="_blank">MicroProfile JWT認証GitHubリポジトリ</a></span></p>

</li>
</ul>

</div>

</doc-view>
