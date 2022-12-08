<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="maven-coordinates"><span class="merged" id="all.317oeS.17"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<p><span class="merged" id="all.VBL6e" title="原文 : To enable MicroProfile Metrics either add a dependency on the helidon-microprofile bundle or add the following dependency to your project&rsquo;s pom.xml (see Managing Dependencies).">MicroProfileメトリクスを有効にするには、<router-link to="/mp/introduction/02_microprofile">helidon-microprofile bundle</router-link>に依存関係を追加するか、プロジェクトの<code>pom.xml</code>に次の依存関係を追加します(<router-link to="/about/04_managing-dependencies">「依存関係の管理」</router-link>を参照)。</span></p>

<markup
lang="xml"

>        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon.microprofile.metrics&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-microprofile-metrics&lt;/artifactId&gt;
        &lt;/dependency&gt;</markup>

</div>

<h2 id="_overview"><span class="merged" id="all.YrpRV.6"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.15Dl6N.spl1" title="原文 : Helidon provides three types of metrics: base, vendor, and application.">Helidonには、次の3つのタイプのメトリクスがあります: ベース、ベンダーおよびアプリケーション。</span> <span class="merged" id="all.15Dl6N.spl2" title="原文 : Helidon automatically provides built-in base and vendor metrics.">Helidonには、基本メトリクスとベンダー・メトリクスが自動的に組み込まれています。</span> <span class="merged" id="all.15Dl6N.spl3" title="原文 : Applications can use these metrics without additional configuration or code changes.">アプリケーションでは、追加の構成またはコードを変更せずに、これらのメトリクスを使用できます。</span> </p>

</div>

<h2 id="_next_steps"><span class="merged" id="all.iDczO.7"  title="原文:: Next Steps">次のステップ</span></h2>
<div class="section">
<p><span class="merged" id="all.3cNXqG" title="原文 : Learn more about MicroProfile Metrics specification."><a href="https://github.com/eclipse/microprofile-metrics/releases/tag/2.0" id="" target="_blank" >「MicroProfileメトリクス仕様」</a>についてさらに学習します。</span></p>

<p><span class="merged" id="all.7nuUt.spl1" title="原文 : Create a sample MicroProfile (MP) project that can be used to run some basic examples using both built-in and custom metrics with Helidon MP.">Helidon MPで組込みメトリクスとカスタム・メトリクスの両方を使用して、いくつかの基本的な例を実行するために使用できるサンプルMicroProfile (MP)プロジェクトを作成します。</span> <span class="merged" id="all.7nuUt.spl2" title="原文 : Helidon MP Metrics Guide."><router-link to="/mp/guides/05_metrics">「Helidon MPメトリクス・ガイド」</router-link>。</span> </p>

</div>
</doc-view>
