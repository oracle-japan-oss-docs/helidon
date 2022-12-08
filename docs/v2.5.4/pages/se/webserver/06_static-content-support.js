<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.68"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.3tSMCQ" title="原文 : To enable Static Content Support add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">静的コンテンツ・サポートを有効にするには、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver-static-content&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_static_content_support"><span class="merged" id="all.2MmOx8" title="原文 : Static Content Support">静的コンテンツのサポート</span></h2>
<div class="section">
<p><span class="merged" id="all.46jkQ5.spl1" title="原文 : Use the io.helidon.webserver.staticcontent.StaticContentSupport class to serve files and classpath resources."><code>io.helidon.webserver.staticcontent.StaticContentSupport</code>クラスを使用して、ファイルおよびクラスパス・リソースを提供します。</span> <span class="merged" id="all.46jkQ5.spl2" title="原文 : StaticContentSupport can be created for any readable directory or classpath context root and registered on a path in Routing."><code>StaticContentSupport</code>は、読取り可能な任意のディレクトリまたはクラスパス・コンテキスト・ルートに対して作成し、<code>Routing</code>のパスに登録できます。</span> </p>

<p><span class="merged" id="all.4EQgAP" title="原文 : You can combine dynamic handlers with StaticContentSupport objects: if no file matches the request path, then the request is forwarded to the next handler.">動的ハンドラを<code>StaticContentSupport</code>オブジェクトと組み合せることができます: リクエスト・パスに一致するファイルがない場合、リクエストは次のハンドラに転送されます。</span></p>


<h3 id="_registering_static_content"><span class="merged" id="all.3Ik1ax" title="原文 : Registering Static Content">静的コンテンツの登録</span></h3>
<div class="section">
<p><span class="merged" id="all.s4DaZ" title="原文 : To register static content based on a file system (/pictures), and classpath (/):">ファイル・システム(<code>/pictures</code>)およびクラスパス(<code>/</code>)に基づいて静的コンテンツを登録するには:</span></p>

<markup
lang="java"

>Routing.builder()
       .register("/pictures", StaticContentSupport.create(Paths.get("/some/WEB/pics"))) <span class="conum" data-value="1" />
       .register("/", StaticContentSupport.builder("/static-content") <span class="conum" data-value="2" />
                                   .welcomeFileName("index.html") <span class="conum" data-value="3" />
                                   .build());</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2WwnOv" title="原文 : Create a new StaticContentSupport object to serve data from the file system, and associate it with the &quot;/pictures&quot; context path.">ファイル・システムからのデータを提供する新しい<code>StaticContentSupport</code>オブジェクトを作成し、<code>"/pictures"</code>コンテキスト・パスに関連付けます。</span></li>
<li data-value="2"><span class="merged" id="all.4DyGS5.spl1" title="原文 : Create a StaticContentSupport object to serve resources from the contextual ClassLoader.">コンテキスト<code>ClassLoader</code>からリソースを提供する<code>StaticContentSupport</code>オブジェクトを作成します。</span> <span class="merged" id="all.4DyGS5.spl2" title="原文 : The specific classloader can be also defined.">特定のクラス・ローダーを定義することもできます。</span> <span class="merged" id="all.4DyGS5.spl3" title="原文 : A builder lets you provide more configuration values.">ビルダーを使用すると、より多くの構成値を指定できます。</span> </li>
<li data-value="3"><span class="merged" id="all.20Zwty" title="原文 : index.html is the file that is returned if a directory is requested."><code>index.html</code>は、ディレクトリがリクエストされた場合に返されるファイルです。</span></li>
</ul>
<p><span class="merged" id="all.29u1iU.spl1" title="原文 : A StaticContentSupport object can be created using create(…​) factory methods or a builder."><code>StaticContentSupport</code>オブジェクトは、<code>create(…​)</code>ファクトリ・メソッドまたは<code>builder</code>を使用して作成できます。</span> <span class="merged" id="all.29u1iU.spl2" title="原文 : The builder lets you provide more configuration values, including welcome file-name and mappings of filename extensions to media types."><code>builder</code>では、<em>welcome file-name</em>やファイル名拡張子からメディア・タイプへのマッピングなど、より多くの構成値を指定できます。</span> </p>

</div>
</div>
</doc-view>
