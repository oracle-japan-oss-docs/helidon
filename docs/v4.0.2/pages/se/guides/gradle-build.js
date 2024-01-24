<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.vhFGK.1" title="原文 : Gradle Guide">Gradleガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2aGrlk.1" title="原文 : This guide describes Helidon’s support for Gradle projects.">このガイドでは、HelidonでのGradleプロジェクトのサポートについて説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.13"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.lCdUx.1.spl1" title="原文 : While most of Helidon’s examples use Maven, you can also use Helidon with a Gradle project.">Helidonのほとんどの例ではMavenを使用していますが、GradleプロジェクトでHelidonを使用することもできます。</span> <span class="merged" id="all.lCdUx.1.spl2" title="原文 : Gradle 8.4+ is required to build Helidon 4 projects.">Helidon 4プロジェクトを構築するには、Gradle 8.4+が必要です。</span> </p>

</div>


<h2 id="_gradle_example"><span class="merged" id="all.1qe2nK.1" title="原文 : Gradle Example">Gradleの例</span></h2>
<div class="section">
<p><span class="merged" id="all.2EBv2M" title="原文 : The Helidon Quickstart Example contains a build.gradle file that you can use as an example for building your Helidon application using Gradle.">Helidon <a href="https://github.com/oracle/helidon/tree/4.0.2/examples/quickstarts/helidon-quickstart-se" target="_blank">「クイックスタートの例」</a>には、Gradleを使用してHelidonアプリケーションを構築するための例として使用できる<code>build.gradle</code>ファイルが含まれています。</span></p>

</div>


<h2 id="_dependency_management"><span class="merged" id="all.Udjxg.2"  title="原文:: Dependency Management"> 依存性管理</span></h2>
<div class="section">
<p><span class="merged" id="all.2Eq3uT.1.spl1" title="原文 : Gradle supports using a Maven POM to perform dependency management.">Gradleでは、Maven POMを使用した依存関係管理の実行をサポートしています。</span> <span class="merged" id="all.2Eq3uT.1.spl2" title="原文 : You can use the Helidon Dependencies POM for this purpose.">この目的には、Helidon依存関係POMを使用できます。</span> <span class="merged" id="all.2Eq3uT.1.spl3" title="原文 : Once you import the Helidon dependency management POM you can specify dependencies without providing a version.">Helidon依存関係管理POMをインポートすると、バージョンを指定せずに依存関係を指定できます。</span> </p>

<markup
lang="xml"
title="Using the Helidon Dependencies POM"
>dependencies {
    // import Helidon dependency management
    implementation enforcedPlatform("io.helidon:helidon-dependencies:${project.helidonversion}")

    implementation 'io.helidon.microprofile.bundles:helidon-microprofile'
    implementation 'org.glassfish.jersey.media:jersey-media-json-binding'

    runtimeOnly 'io.smallrye:jandex'
    runtimeOnly 'jakarta.activation:jakarta.activation-api'

    testCompileOnly 'org.junit.jupiter:junit-jupiter-api:'
}</markup>

</div>

</doc-view>