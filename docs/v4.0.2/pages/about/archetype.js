<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.3eI0Nh.spl1" title="原文 : Helidon CLI provides a convenient way to bootstrap Helidon applications."><router-link to="/about/cli">Helidon CLI</router-link>は、Helidonアプリケーションをブートストラップする便利な方法を提供します。</span> <span class="merged" id="all.3eI0Nh.spl2" title="原文 : It allows you to choose from a set of archetypes i.e. application with pre-defined feature sets and lets you customize it by providing a host of options.">あらかじめ定義された機能セットを持つアプリケーションなど、一連のタイプから選択でき、多数のオプションを提供してカスタマイズできます。</span> </p>

</div>


<h2 id="_archetypes"><span class="merged" id="all.20XxjR" title="原文 : Archetypes">タイプ</span></h2>
<div class="section">
<p><span class="merged" id="all.NYQwB" title="原文 : Helidon provides the following set of archetypes to bootstrap your application development journey.">Helidonは、アプリケーション開発ジャーニをブートストラップするために、次の一連の原型を提供します。</span></p>


<h3 id="_quickstart"><span class="merged" id="all.2Lb0u5"  title="原文: QuickStart">QuickStart</span></h3>
<div class="section">
<p><span class="merged" id="all.3PIiek" title="原文 : This option creates a Helidon project that includes multiple REST operations along with default observability setup and a set of dependencies to enable ease of development e.g. in case of Helidon MP, it uses helidon-microprofile bundle instead of minimal helidon-microprofile-core bundle.">このオプションは、デフォルトの可観測性設定および一連の依存関係とともに複数のREST操作を含むHelidonプロジェクトを作成し、開発を容易にします。たとえば、Helidon MPの場合は、最小の<code>helidon-microprofile-core</code>バンドルではなく<code>helidon-microprofile</code>バンドルを使用します。</span></p>

</div>


<h3 id="_database"><span class="merged" id="all.sfGTQ"  title="原文:: Database">データベース</span></h3>
<div class="section">
<p><span class="merged" id="all.1wulS7.spl1" title="原文 : This option builds on QuickStart to demonstrate how to integrate with database (in-memory H2, by default).">このオプションは、<code>QuickStart</code>上に構築され、データベースとの統合方法(デフォルトではインメモリーH2)を示します。</span> <span class="merged" id="all.1wulS7.spl2" title="原文 : In case of, Helidon SE that uses the DbClient API while for Helidon MP that uses JPA.">その場合、JPAを使用するHelidon MPに対してDbClient APIを使用するHelidon SE。</span> </p>

</div>


<h3 id="_oci"><span class="merged" id="all.1TlvKf"  title="原文:: OCI">OCI</span></h3>
<div class="section">
<p><span class="merged" id="all.4MVnQx.spl1" title="原文 : This option builds on QuickStart to demonstrate integration with Oracle Cloud Infrastructure (OCI) services using the OCI SDK.">このオプションは、OCI SDKを使用してOracle Cloud Infrastructure (OCI)サービスとの統合を示すために、<code>QuickStart</code>上に構築されます。</span> <span class="merged" id="all.4MVnQx.spl2" title="原文 : Generated project showcases OpenApi-driven development approach where the practice of designing and building APIs is done first, then creating the rest of an application around them is implemented next.">生成されたプロジェクトでは、まずAPIの設計と構築の実践が行われるOpenApi駆動の開発アプローチを示し、次にその周囲の残りのアプリケーションを作成します。</span> <span class="merged" id="all.4MVnQx.spl3" title="原文 : This is available for Helidon MP only.">これは、Helidon MPでのみ使用できます。</span> </p>

</div>


<h3 id="_custom"><span class="merged" id="all.4QwjAz"  title="原文:: Custom">カスタム</span></h3>
<div class="section">
<p><span class="merged" id="all.1vWhPV" title="原文 : This option enables user to create Helidon project of their choice, suitable to start from scratch i.e. bare minimum, if default values are chosen Or choose from many options available.">このオプションを使用すると、ユーザーは選択したHelidonプロジェクトを作成できます。最初から開始するのに適しています。つまり、デフォルト値が選択されている場合、または使用可能な多数のオプションから選択する場合、最小限です。</span></p>

</div>

</div>


<h2 id="_generated_application_structure"><span class="merged" id="all.iWBuM" title="原文 : Generated Application Structure">生成されたアプリケーション構造</span></h2>
<div class="section">
<p><span class="merged" id="all.WyKUj.spl1" title="原文 : You can scaffold a new Maven project based on these archetypes.">これらの原型に基づいて、新しいMavenプロジェクトをスキャフォールドできます。</span> <span class="merged" id="all.WyKUj.spl2" title="原文 : See Helidon CLI and our Helidon SE QuickStart Guide or Helidon MP QuickStart Guide for more information.">詳細は、<router-link to="/about/cli">Helidon CLI</router-link>および<router-link to="/se/guides/quickstart">「Helidon SE QuickStartガイド」</router-link>または<router-link to="/mp/guides/quickstart">「Helidon MP QuickStartガイド」</router-link>を参照してください。</span> </p>

<p><span class="merged" id="all.1CCpXa.spl1" title="原文 : Once the archetype is selected, the other options have defaults and the project is generated in a directory named after the artifactId value.">タイプを選択すると、他のオプションにデフォルトが設定され、プロジェクトが<code>artifactId</code>値にちなんで指定されたディレクトリに生成されます。</span> <span class="merged" id="all.1CCpXa.spl2" title="原文 : It mainly contains the following:">主に次のものが含まれます:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2uOye2" title="原文 : Maven structure">Maven構造</span></p>

</li>
<li>
<p><span class="merged" id="all.4WTNBv" title="原文 : skeletal application code">スケルトン・アプリケーション・コード</span></p>

</li>
<li>
<p><span class="merged" id="all.3b4MiV" title="原文 : associated unit test code">関連ユニット・テスト・コード</span></p>

</li>
<li>
<p><span class="merged" id="all.xgMPf" title="原文 : example Dockerfile files">Dockerfileファイルの例</span></p>

</li>
<li>
<p><span class="merged" id="all.4D0jaH" title="原文 : application configuration file(s)">アプリケーション構成ファイル</span></p>

</li>
<li>
<p><span class="merged" id="all.3Lb7rj" title="原文 : instructions to build and run application/test">アプリケーション/テストの構築と実行の手順</span></p>

</li>
</ul>

</div>


<h2 id="_using_generated_application"><span class="merged" id="all.1nebdI" title="原文 : Using Generated Application">生成されたアプリケーションの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.O2Fln.spl1" title="原文 : The easiest way to get started is to follow the instructions in the README file and familiarize with layout and features provided to build upon them.">開始する最も簡単な方法は、<code>README</code>ファイルの指示に従い、それらに基づいて提供されるレイアウトおよび機能を理解することです。</span> <span class="merged" id="all.O2Fln.spl2" title="原文 : In addition, look at the pom.xml files.">また、<code>pom.xml</code>ファイルも確認します。</span> <span class="merged" id="all.O2Fln.spl3" title="原文 : You can find a suitable Helidon parent pom file that will enable you to use the different dependencies managed and provided by Helidon.">適切なHelidon親<code>pom</code>ファイルがあり、これを使用すると、Helidonで管理および提供される様々な依存関係を使用できます。</span> </p>

</div>

</doc-view>
