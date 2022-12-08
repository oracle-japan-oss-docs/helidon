<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1DazWa.1" title="原文 : Maven Guide">Mavenガイド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.2yZVmw.1" title="原文 : This guide describes Helidon&rsquo;s support for Maven projects.">このガイドでは、HelidonでのMavenプロジェクトのサポートについて説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_introduction"><span class="merged" id="all.4LJMHk.14"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.2FRJJH.1" title="原文 : Helidon supports Maven by providing the following:">Helidonは、次の機能を提供することでMavenをサポートします:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.3cfLSs.1" title="原文 : The Helidon Application parent POM">Helidonアプリケーションの親POM</span>

</li>
<li>
<span class="merged" id="all.p66on.1" title="原文 : Dependency management via the Helidon BOM and Dependencies POMs">Helidon BOMおよび依存POMによる依存関係管理</span>

</li>
<li>
<span class="merged" id="all.XHO4Z.2" title="原文 : The helidon-maven-plugin"><code>helidon-maven-plugin</code></span>

</li>
</ol>
</div>

<h2 id="_the_helidon_application_pom"><span class="merged" id="all.5tvKu.1" title="原文 : The Helidon Application POM">HelidonアプリケーションPOM</span></h2>
<div class="section">
<p><span class="merged" id="all.3cNNib.spl1" title="原文 : Helidon examples and projects generated using the Helidon Quickstart use a Helidon application POM as their parent."><router-link to="/se/guides/02_quickstart">「Helidonクイックスタート」</router-link>を使用して生成されたHelidonの例およびプロジェクトでは、親としてHelidonアプリケーションPOMを使用します。</span> <span class="merged" id="all.3cNNib.spl2" title="原文 : This parent POM provides the following:">この親POMは次のものを提供します:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1K9u7y.1" title="原文 : Helidon dependency management.">Helidonの依存関係管理。</span>

</li>
<li>
<span class="merged" id="all.2MHKm4.1" title="原文 : Maven plugin configurations to help in the building and packaging of your Helidon application.">Helidonアプリケーションのビルドおよびパッケージ化に役立つMavenプラグイン構成。</span>

</li>
</ol>
<p><span class="merged" id="all.1l7l5r.spl1" title="原文 : If you want to use your own parent POM, then take a look at the standalone quickstart example.">独自の親POMを使用する場合は、<a href="https://github.com/oracle/helidon/tree/2.5.4/examples/quickstarts/helidon-standalone-quickstart-se" id="" target="_blank" >「スタンドアロン・クイックスタートの例」</a>を参照してください。</span> <span class="merged" id="all.1l7l5r.spl2" title="原文 : This example has a stand-alone POM that you can pattern your own application POM after.">この例には、独自のアプリケーションPOMを後からパターン化できるスタンドアロンPOMがあります。</span> </p>

<p><span class="merged" id="all.A9ORX.1" title="原文 : For more details on Helidon application POMs see the Helidon&rsquo;s Application POMS">HelidonアプリケーションPOMの詳細は、<a href="https://github.com/oracle/helidon/blob/2.5.4/docs-internal/application-pom.md" id="" target="_blank" >「HelidonアプリケーションPOMS」</a>を参照してください</span></p>

</div>

<h2 id="_dependency_management"><span class="merged" id="all.Udjxg.2"  title="原文:: Dependency Management"> 依存性管理</span></h2>
<div class="section">
<p><span class="merged" id="all.1K7bwt.1" title="原文 : In Maven you use Dependency Management to manage the versions of the dependencies used by your project so that you do not need to specify versions when declaring project dependencies.">Mavenでは、依存関係管理を使用してプロジェクトで使用される依存関係のバージョンを管理するため、プロジェクトの依存関係を宣言するときにバージョンを指定する必要がありません。</span></p>

<p><span class="merged" id="all.1Ue6Is.1" title="原文 : Helidon provides two POMs that are used together for dependency management:">Helidonには、依存関係管理のために一緒に使用される2つのPOMが用意されています:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4fNkCy.1" title="原文 : The Helidon Bill of Materials (BOM) POM (io.helidon:helidon-bom): manages the version of Helidon artifacts (to align with the Helidon version).">Helidon Bill of Materials (BOM) POM (<code>io.helidon:helidon-bom</code>) : Helidonアーティファクトのバージョンを管理します(Helidonのバージョンに合せます)。</span>

</li>
<li>
<span class="merged" id="all.1PiMU8.1.spl1" title="原文 : The Helidon Dependencies POM (io.helidon:helidon-dependencies): manages the versions of third party dependencies to ensure consistency across Helidon and your Helidon application.">Helidon依存関係POM (<code>io.helidon:helidon-dependencies</code>) : サード・パーティの依存関係のバージョンを管理して、HelidonとHelidonアプリケーション間の整合性を確保します。</span> <span class="merged" id="all.1PiMU8.1.spl2" title="原文 : Inherits the Helidon BOM POM.">Helidon BOM POMを継承します。</span> 

</li>
</ol>
<p><span class="merged" id="all.2Cmqrr.1.spl1" title="原文 : When you use a Helidon Application POM as your project&rsquo;s parent pom, you inherit Helidon&rsquo;s dependency management.">Helidon Application POMをプロジェクトの親POMとして使用する場合、Helidonの依存関係管理を継承します。</span> <span class="merged" id="all.2Cmqrr.1.spl2" title="原文 : If you have your own parent, then you can import Helidon dependency management like this:">独自の親がある場合は、次のようにHelidonの依存関係管理をインポートできます:</span> </p>

<markup
lang="xml"
title="Import Helidon Dependency Management"
>&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;io.helidon&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-dependencies&lt;/artifactId&gt;
            &lt;version&gt;2.5.4&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;</markup>

<p><span class="merged" id="all.3eHftr.1" title="原文 : You then declare dependencies on Helidon (and other) components without specifying a version.">次に、バージョンを指定せずに、Helidon (およびその他の)コンポーネントへの依存関係を宣言します。</span></p>

<markup
lang="xml"
title="Component dependency"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.webserver&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-webserver&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

</div>

<h2 id="_the_helidon_maven_plugin"><span class="merged" id="all.XHO4Z.3" title="原文 : The helidon-maven-plugin"><code>helidon-maven-plugin</code></span></h2>
<div class="section">
<p><span class="merged" id="all.3jdNBS.1" title="原文 : Helidon provides a Maven plugin that, among other things, provides the following goals:">Helidonには、特に次の目標を提供するMavenプラグインが用意されています:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.1qM8bn" title="原文 : native-image: Build a GraalVM native image.">native-image: <router-link to="/se/guides/36_graalnative">「GraalVMネイティブ・イメージ」</router-link>を構築します。</span>

</li>
<li>
<span class="merged" id="all.3jlwgZ" title="原文 : jlink-image: Build a custom runtime Java image.">jlink-image: <router-link to="/se/guides/37_jlink_image">「カスタム・ランタイムJavaイメージ」</router-link>を構築します。</span>

</li>
</ol>
<p><span class="merged" id="all.rXPij.1" title="原文 : For full documentation of the plugin please see the Helidon Maven Plugin README.">プラグインの完全なドキュメントは、<a href="https://github.com/oracle/helidon-build-tools/tree/master/maven-plugins/helidon-maven-plugin" id="" target="_blank" >「Helidon MavenプラグインREADME」</a>を参照してください。</span></p>

<p><span class="merged" id="all.3CWX7Z.1.spl1" title="原文 : If you use the Helidon application parent POM you will have this plugin configured for you.">Helidonアプリケーションの親POMを使用する場合、このプラグインは自動的に構成されます。</span> <span class="merged" id="all.3CWX7Z.1.spl2" title="原文 : If you need to customize the helidon-maven-plugin you can do so in a few ways:"><code>helidon-maven-plugin</code>をカスタマイズする必要がある場合は、いくつかの方法があります:</span> </p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.195Eyb.1" title="原文 : Passing system properties to Maven on the command line.">システム・プロパティをコマンドラインでMavenに渡します。</span>

</li>
<li>
<span class="merged" id="all.2kzwRk.1" title="原文 : Setting system properties in your project&rsquo;s pom.xml">プロジェクトの<code>pom.xml</code>でのシステム・プロパティの設定</span>

</li>
<li>
<span class="merged" id="all.3ZRqlZ.1" title="原文 : Overriding the plugin configuration by using pluginManagment"><code>pluginManagment</code>を使用したプラグイン構成のオーバーライド</span>

</li>
</ol>

<h3 id="_pass_property_on_command_line"><span class="merged" id="all.8EeuS.1" title="原文 : Pass Property on Command Line">コマンドラインでプロパティを渡す</span></h3>
<div class="section">
<p><span class="merged" id="all.2C5tgP.1" title="原文 : You can override many of the plugin attributes by passing a system property to the mvn command:">システム・プロパティを<code>mvn</code>コマンドに渡すことで、プラグイン属性の多くをオーバーライドできます:</span></p>

<markup


>mvn -Djlink.image.addClassDataSharingArchive=false ...</markup>

</div>

<h3 id="_set_property_in_pom_xml"><span class="merged" id="all.1XOmLx.1" title="原文 : Set Property in pom.xml">pom.xmlでのプロパティの設定</span></h3>
<div class="section">
<p><span class="merged" id="all.1X72OQ.1" title="原文 : Or you can set the properties in your project&rsquo;s pom.xml:">または、プロジェクトのpom.xmlでプロパティを設定できます:</span></p>

<markup


>&lt;properties&gt;
    &lt;jlink.image.addClassDataSharingArchive&gt;false&lt;/jlink.image.addClassDataSharingArchive&gt;
    &lt;native.image.reportExceptionStackTraces&gt;true&lt;/native.image.reportExceptionStackTraces&gt;
&lt;/properties&gt;</markup>

</div>

<h3 id="_override_plugin_configuration_using_pluginmanagement"><span class="merged" id="all.FpJaB.1" title="原文 : Override Plugin Configuration using pluginManagement"><code>pluginManagement</code>を使用したプラグイン構成のオーバーライド</span></h3>
<div class="section">
<p><span class="merged" id="all.2tAvi3.1" title="原文 : For full control you can override the plugin&rsquo;s configuration using pluginManagement:">完全に制御するには、<code>pluginManagement</code>を使用してプラグインの構成をオーバーライドします:</span></p>

<markup
lang="xml"
title="Turn off generation of the CDS Archive when generating a custom Java runtime image"
>    &lt;build&gt;
        &lt;pluginManagement&gt;
            &lt;plugins&gt;
                &lt;plugin&gt;
                    &lt;groupId&gt;io.helidon.build-tools&lt;/groupId&gt;
                    &lt;artifactId&gt;helidon-maven-plugin&lt;/artifactId&gt;
                    &lt;executions&gt;
                        &lt;execution&gt;
                            &lt;id&gt;jlink-image&lt;/id&gt;
                            &lt;configuration&gt;
                                &lt;addClassDataSharingArchive&gt;false&lt;/addClassDataSharingArchive&gt;
                            &lt;/configuration&gt;
                        &lt;/execution&gt;
                    &lt;/executions&gt;
                &lt;/plugin&gt;
            &lt;/plugins&gt;
        &lt;/pluginManagement&gt;
    &lt;/build&gt;</markup>

<markup
lang="xml"
title="Override final name of native image binary"
>    &lt;build&gt;
        &lt;pluginManagement&gt;
            &lt;plugins&gt;
                &lt;plugin&gt;
                    &lt;groupId&gt;io.helidon.build-tools&lt;/groupId&gt;
                    &lt;artifactId&gt;helidon-maven-plugin&lt;/artifactId&gt;
                    &lt;executions&gt;
                        &lt;execution&gt;
                            &lt;id&gt;native-image&lt;/id&gt;
                            &lt;configuration&gt;
                                &lt;finalName&gt;my-fantastic-service&lt;/finalName&gt;
                            &lt;/configuration&gt;
                        &lt;/execution&gt;
                    &lt;/executions&gt;
                &lt;/plugin&gt;
            &lt;/plugins&gt;
        &lt;/pluginManagement&gt;
    &lt;/build&gt;</markup>

</div>
</div>
</doc-view>
