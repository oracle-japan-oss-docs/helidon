<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.15"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.46Qtho" title="原文 : To enable JWT Authentication either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">JWT認証を有効にするには、<router-link to="/mp/introduction/02_microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.microprofile.jwt&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-microprofile-jwt-auth&lt;/artifactId&gt;
        &lt;/dependency&gt;</markup>

</div>

<h2 id="_overview"><span class="merged" id="all.YrpRV.5"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2EysiZ.spl1" title="原文 : JSON Web Token (JWT) defines a compact and self-contained way for securely transmitting information between parties as a JSON object.">JSON Web Token (JWT)は、パーティ間でJSONオブジェクトとして情報を安全に送信するためのコンパクトで自己完結型の方法を定義します。</span> <span class="merged" id="all.2EysiZ.spl2" title="原文 : With JWT Auth you can integrate security features such as single sign on into your Helidon MP applications.">JWT認証を使用すると、シングル・サインオンなどのセキュリティ機能をHelidon MPアプリケーションに統合できます。</span> </p>

</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.6"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.HTwg7.spl1" title="原文 : The main configuration point for JWT Auth is a JAX-RS Application class.">JWT認証の主な構成ポイントは、JAX-RSアプリケーション・クラスです。</span> <span class="merged" id="all.HTwg7.spl2" title="原文 : As this class is discovered using CDI, it must have a bean defining annotation.">このクラスはCDIを使用して検出されるため、Bean定義の注釈が必要です。</span> </p>

<p><span class="merged" id="all.IOieA" title="原文 : Example of an application that enables JWT-Auth (with minimal required annotations):">JWT-Auth (最小限必要な注釈を使用)を有効にするアプリケーションの例:</span></p>

<markup
lang="java"

>@LoginConfig(authMethod = "MP-JWT")
@ApplicationScoped
public class ProtectedApplication extends Application{
}</markup>

<p><span class="merged" id="all.1zqFVb" title="原文 : Learn more about JWT authentication: ">JWT認証についてさらに学習します:<br></span></p>

<p><span class="merged" id="all.4PXv0N" title="原文 : Eclipse MicroProfile Interoperable JWT RBAC"><a href="https://download.eclipse.org/microprofile/microprofile-jwt-auth-1.1.1/microprofile-jwt-auth-spec.html#_introduction" id="" target="_blank" >Eclipse MicroProfile Interoperable JWT RBAC</a></span></p>

</div>
</doc-view>
