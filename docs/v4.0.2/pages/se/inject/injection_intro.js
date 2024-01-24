<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>


<h2 id="_contents"><span class="merged" id="all.1Q34Zl.55"  title="原文:: Contents">目次</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.1S1Ao6.54" title="原文 : Overview"><router-link @click.native="this.scrollFix('#_overview')" to="#_overview">概要</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4HzS1C.2" title="原文 : Maven Coordinates"><router-link @click.native="this.scrollFix('#_maven_coordinates')" to="#_maven_coordinates">Maven連携</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.3grmMy.31" title="原文 : Usage"><router-link @click.native="this.scrollFix('#_usage')" to="#_usage">使用</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.4RBAqg.20" title="原文 : API"><router-link @click.native="this.scrollFix('#_api')" to="#_api">API</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.26FILD.32" title="原文 : Configuration"><router-link @click.native="this.scrollFix('#_configuration')" to="#_configuration">構成</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.2qcuF4.31" title="原文 : Examples"><router-link @click.native="this.scrollFix('#_examples')" to="#_examples">例</router-link></span></p>

</li>
<li>
<p><span class="merged" id="all.qt7C9.22" title="原文 : Additional Information"><router-link @click.native="this.scrollFix('#_additional_information')" to="#_additional_information">追加情報</router-link></span></p>

</li>
</ul>

</div>


<h2 id="_overview"><span class="merged" id="all.YrpRV.70"  title="原文:: Overview">概要</span></h2>
<div class="section">
<p><span class="merged" id="all.2w6Fa9" title="原文 : Helidon Injection is an optional feature in Helidon that provides service registry, a lifecycle engine and extensibility for customized code generation.">Helidonインジェクションは、カスタマイズされたコード生成のためのサービス・レジストリ、ライフサイクル・エンジンおよび拡張性を提供する、Helidonのオプション機能です。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1XuR5e" title="原文 : Helidon Injection provides a way to develop non Helidon-specific declarative code using standard Javax/Jakarta annotation types.">Helidonインジェクションは、標準のJavax/Jakarta注釈型を使用して、Helidon固有でない宣言コードを開発する方法を提供します。</span></p>
</div>

<p><span class="merged" id="all.1JUf78.spl1" title="原文 : The Helidon Injection Framework provides a mix of declarative and programmatic ways to build your application.">Helidonインジェクション・フレームワークには、アプリケーションを構築するための宣言的な方法とプログラム的な方法が混在しています。</span> <span class="merged" id="all.1JUf78.spl2" title="原文 : Helidon Injection’s minimalist, compile-time generated dependency injection (DI) framework and compile-time source code generation has a number of advantages, including:">Helidonインジェクションのミニマリスト、コンパイル時に生成される依存関係インジェクション(DI)フレームワークおよびコンパイル時に発生するソース・コード生成には、次のような多くの利点があります:</span> </p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.23axeI" title="原文 : enables declarative, Inversion of Control-style programming">制御スタイルのプログラミングの宣言的な反転を可能にします</span></p>

</li>
<li>
<p><span class="merged" id="all.4Kx4SG" title="原文 : offers visibility into your application by providing &quot;less magic&quot; - understandability and debug-ability of your application">「少ない魔法」を提供することで、アプリケーションの可視化を実現 - アプリケーションの理解性とデバッグ可能性</span></p>

</li>
<li>
<p><span class="merged" id="all.4KWFwp" title="原文 : provides deterministic behavior (instead of depending on reflection and classpath ordering, etc.)">決定的な動作を提供します(リフレクションやクラスパスの順序などに依存するのではなく)</span></p>

</li>
<li>
<p><span class="merged" id="all.3kQeWo" title="原文 : optimizes performance improvements since binding the model at compile-time is more efficient than computing it at runtime.">コンパイル時にモデルをバインドする方が、実行時にモデルを計算するより効率的であるため、パフォーマンスの向上が最適化されます。</span></p>

</li>
</ul>

</div>


<h2 id="_maven_coordinates"><span class="merged" id="all.317oeS.47"  title="原文:: Maven Coordinates">Maven連携</span></h2>
<div class="section">
<markup
lang="java"
title="Injection dependencies"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.inject&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-inject-api&lt;/artifactId&gt;
    &lt;version&gt;${helidon.version}&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.inject&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-inject-types&lt;/artifactId&gt;
    &lt;version&gt;${helidon.version}&lt;/version&gt;
&lt;/dependency&gt;</markup>

</div>


<h2 id="_usage"><span class="merged" id="all.JUOSC.48"  title="原文:: Usage">使用</span></h2>
<div class="section">
<p><span class="merged" id="all.3pfBNJ" title="原文 : Once you have planned how each of your resources should support Injection, you specify the behavior in one of two ways:">各リソースでインジェクションをサポートする方法を計画したら、次のいずれかの方法で動作を指定します:</span></p>

</div>


<h2 id="_api"><span class="merged" id="all.15i2uT.22"  title="原文:: API">API</span></h2>
<div class="section">
<p><span class="merged" id="all.2qTFJn" title="原文 : Adding Injection behavior to your Helidon WebServer application involves just a few simple steps.">Helidon WebServerアプリケーションへのインジェクション動作の追加には、いくつかの簡単なステップのみが含まれます。</span></p>


<h3 id="_maven_coordinates_2"><span class="merged" id="all.317oeS.48"  title="原文:: Maven Coordinates">Maven連携</span></h3>
<div class="section">
<markup
lang="java"
title="Injection API pom.xml"
> &lt;artifactId&gt;helidon-inject-inject&lt;/artifactId&gt;
 &lt;name&gt;Helidon Injection API&lt;/name&gt;</markup>

</div>


<h3 id="_types"><span class="merged" id="all.2neYwG"  title="原文:: Types">タイプ</span></h3>
<div class="section">
<p><span class="merged" id="all.12VHen.spl1" title="原文 : The Injection API provides types that are generally useful at compile time to assign special meaning to the type.">インジェクションAPIは、コンパイル時にタイプに特別な意味を割り当てるために一般的に役立つタイプを提供します。</span> <span class="merged" id="all.12VHen.spl2" title="原文 : In this way it also helps with readability and intentions of the code itself.">このようにして、コード自体の読みやすさと意図にも役立ちます。</span> </p>

<markup
lang="java"
title="Injection types pom.xml"
> &lt;artifactId&gt;helidon-inject-types&lt;/artifactId&gt;
 &lt;name&gt;Helidon Injection Types&lt;/name&gt;</markup>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2ZeMcX" title="原文 : {@link io.helidon.inject.api.Contract} - signifies that the type can be used for lookup in the service registry.">{@link io.helidon.inject.api.Contract} - タイプがサービス・レジストリの検索に使用できることを示します。</span></p>

</li>
<li>
<p><span class="merged" id="all.3R6MMX" title="原文 : {@link io.helidon.inject.api.ExternalContracts} - same as Contract, but applied to the implementation class instead.">{@link io.helidon.inject.api.ExternalContracts} - 契約と同じですが、かわりに実装クラスに適用されます。</span></p>

</li>
<li>
<p><span class="merged" id="all.1GDF7P" title="原文 : {@link io.helidon.inject.api.RunLevel} - ascribes meaning for when the service should start.">{@link io.helidon.inject.api.RunLevel} - サービスを開始するタイミングの意味を示します。</span></p>

</li>
</ul>

</div>

</div>


<h2 id="_configuration"><span class="merged" id="all.Pfqvy.37"  title="原文:: Configuration">構成</span></h2>
<div class="section">
<p><span class="merged" id="all.4Ex8lp" title="原文 : Injection Config builder">インジェクション構成ビルダー</span></p>

</div>


<h2 id="_examples"><span class="merged" id="all.2OLHXv.33"  title="原文:: Examples">例</span></h2>
<div class="section">

</div>


<h2 id="_additional_information"><span class="merged" id="all.1BotSu.24"  title="原文:: Additional Information">追加情報</span></h2>
<div class="section">

</div>

</doc-view>
