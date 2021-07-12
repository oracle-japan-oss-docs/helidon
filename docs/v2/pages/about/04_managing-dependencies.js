<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1yJgDF" title="原文 : Managing Dependencies">依存関係の管理</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1tYd3T.spl1" title="原文 : Helidon provides a &ldquo;Bill Of Materials&rdquo; (BOM) to manage dependencies.">Helidonには、依存関係を管理するための部品構成表(BOM)が用意されています。</span> <span class="merged" id="all.1tYd3T.spl2" title="原文 : This is a special Maven pom file that provides dependency management.">これは、依存関係管理を提供する特別なMaven pomファイルです。</span> </p>

<p><span class="merged" id="all.2V4xlu" title="原文 : Using the Helidon BOM allows you to use Helidon component dependencies with a single version: the Helidon version.">Helidon BOMを使用すると、単一バージョンでHelidonコンポーネントの依存関係を使用できます: Helidonのバージョン。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_the_helidon_application_poms"><span class="merged" id="all.4fYHIO" title="原文 : The Helidon Application POMs">HelidonアプリケーションPOM</span></h2>
<div class="section">
<p><span class="merged" id="all.14uVhr.spl1" title="原文 : If you created your application using the Helidon CLI or archetypes then your project will have a Helidon Application POM as its parent POM."><router-link to="/about/05_cli">Helidon CLI</router-link>または<router-link to="/about/03_prerequisites">archetypes</router-link>を使用してアプリケーションを作成した場合、プロジェクトの親POMはHelidonアプリケーションPOMになります。</span> <span class="merged" id="all.14uVhr.spl2" title="原文 : In this case you will get Helidon&rsquo;s dependency management automatically.">この場合、Helidonの依存関係管理が自動的に行われます。</span> </p>

<p><span class="merged" id="all.2syzzd" title="原文 : If your project doesn&rsquo;t use a Helidon Application POM as its parent, then you will need to import the Helidon BOM POM.">プロジェクトで親としてHelidonアプリケーションPOMを使用しない場合は、Helidon BOM POMをインポートする必要があります。</span></p>

</div>

<h2 id="_the_helidon_bom_pom"><span class="merged" id="all.3GuzKb" title="原文 : The Helidon BOM POM">Helidon BOM POM</span></h2>
<div class="section">
<p><span class="merged" id="all.E11IF" title="原文 : To import the Helidon BOM POM add the following snippet to your pom.xml file.">Helidon BOM POMをインポートするには、次のスニペットをpom.xmlファイルに追加します。</span></p>

<markup
lang="xml"
title="Helidon BOMのインポート"
>&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-bom&lt;/artifactId&gt;
            &lt;version&gt;2.3.1&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;</markup>

</div>

<h2 id="_using_helidon_component_dependencies"><span class="merged" id="all.1nraYX" title="原文 : Using Helidon Component Dependencies">Helidonコンポーネントの依存関係の使用</span></h2>
<div class="section">
<p><span class="merged" id="all.1KS2gs" title="原文 : Once you have imported the BOM, you can declare dependencies on Helidon components without specifying a version.">BOMをインポートすると、バージョンを指定せずにHelidonコンポーネントへの依存関係を宣言できます。</span></p>

<markup
lang="xml"
title="コンポーネントの依存関係"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_for_more_information"><span class="merged" id="all.2MX3y9"  title="原文:: For More Information">詳細情報</span></h2>
<div class="section">
<ul class="ulist">
<li>
<p><span class="merged" id="all.3LpFa2" title="原文 : Maven Build Guide for SE and MP"><router-link to="/se/guides/25_maven_build">SE</router-link>および<router-link to="/mp/guides/25_maven_build">MP</router-link>のMavenビルド・ガイド</span></p>

</li>
<li>
<p><span class="merged" id="all.4IqJFY" title="原文 : Gradle Build Guide for SE and MP"><router-link to="/se/guides/26_gradle_build">SE</router-link>および<router-link to="/mp/guides/26_gradle_build">MP</router-link>のGradleビルド・ガイド</span></p>

</li>
</ul>
</div>
</doc-view>
