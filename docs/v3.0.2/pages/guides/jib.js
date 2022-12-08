<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2mTUBh" title="原文 : Build Container Images with Jib">Jibを使用したコンテナ・イメージのビルド</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1cbJ6M" title="原文 : This guide describes how to build container images for Helidon applications using Jib and Maven.">このガイドでは、JibおよびMavenを使用してHelidonアプリケーションのコンテナ・イメージをビルドする方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">

<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 100%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.10cPjD"  title="原文:: About 10 minutes">約10分</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1r3R7P" title="原文 : Helidon Prerequisites"><router-link to="/about/prerequisites">Helidonの前提条件</router-link></span></td>
</tr>
</tbody>
</table>
</div>

</div>


<h2 id="_creating_a_docker_image_using_jib"><span class="merged" id="all.3FvAOA" title="原文 : Creating a Docker Image Using Jib">Jibを使用したDockerイメージの作成</span></h2>
<div class="section">
<p><span class="merged" id="all.p9hRT.spl1" title="原文 : Jib is a java tool chain for building Docker images for Java applications."><a href="https://github.com/GoogleContainerTools/jib" target="_blank">Jib</a>は、Javaアプリケーション用のDockerイメージをビルドするためのjavaツール・チェーンです。</span> <span class="merged" id="all.p9hRT.spl2" title="原文 : It is integrated with Maven and Gradle and uses a distro-less base image to produce small images.">MavenおよびGradleと統合され、<a href="https://github.com/GoogleContainerTools/distroless" target="_blank">distro-less</a>ベース・イメージを使用して小さいイメージを生産します。</span> </p>

<p><span class="merged" id="all.ecV07" title="原文 : Jib does not require the docker command or the Docker daemon, there is no need to solve the Docker-in-Docker problem in order to build Docker images as part of your continuous integration.">Jibには<code>docker</code>コマンドやDockerデーモンは必要ありません。継続的統合の一環としてDockerイメージをビルドするために、Docker-in-Dockerの問題を解決する必要はありません。</span></p>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.1H58xh" title="原文 : The docker command is only required for local usage when registering images in your local Docker registry."><code>docker</code>コマンドは、ローカルDockerレジストリにイメージを登録するときにローカルで使用する場合にのみ必要です。</span></p>
</div>

<p><span class="merged" id="all.4ckP1o" title="原文 : The example below shows how to build an image and register it in the local registry using the jib-maven-plugin.">次の例は、<code>jib-maven-plugin</code>を使用してイメージをビルドし、ローカル・レジストリに登録する方法を示しています。</span></p>

<p><span class="merged" id="all.6SlmE" title="原文 : Add the following plugin declaration to your pom.xml:">次のプラグイン宣言をpom.xmlに追加します:</span></p>

<markup
lang="xml"

>&lt;plugin&gt;
    &lt;groupId&gt;com.google.cloud.tools&lt;/groupId&gt;
    &lt;artifactId&gt;jib-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;0.10.1&lt;/version&gt;
    &lt;configuration&gt;
        &lt;to&gt;
            &lt;image&gt;jib-${project.artifactId}&lt;/image&gt;
            &lt;tags&gt;
                &lt;tag&gt;${project.version}&lt;/tag&gt;
                &lt;tag&gt;latest&lt;/tag&gt;
            &lt;/tags&gt;
        &lt;/to&gt;
        &lt;container&gt;
            &lt;!-- good defaults intended for containers --&gt;
            &lt;jvmFlags&gt;
                &lt;jmxFlag&gt;-server&lt;/jmxFlag&gt;
                &lt;jmxFlag&gt;-Djava.awt.headless=true&lt;/jmxFlag&gt;
                &lt;jmxFlag&gt;-XX:+UnlockExperimentalVMOptions&lt;/jmxFlag&gt;
                &lt;jmxFlag&gt;-XX:+UseCGroupMemoryLimitForHeap&lt;/jmxFlag&gt;
                &lt;jmxFlag&gt;-XX:InitialRAMFraction=2&lt;/jmxFlag&gt;
                &lt;jmxFlag&gt;-XX:MinRAMFraction=2&lt;/jmxFlag&gt;
                &lt;jmxFlag&gt;-XX:MaxRAMFraction=2&lt;/jmxFlag&gt;
                &lt;jmxFlag&gt;-XX:+UseG1GC&lt;/jmxFlag&gt;
            &lt;/jvmFlags&gt;
            &lt;mainClass&gt;${mainClass}&lt;/mainClass&gt;
            &lt;ports&gt;
                &lt;port&gt;8080&lt;/port&gt;
            &lt;/ports&gt;
        &lt;/container&gt;
    &lt;/configuration&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;goals&gt;
                &lt;goal&gt;dockerBuild&lt;/goal&gt;
            &lt;/goals&gt;
            &lt;phase&gt;package&lt;/phase&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;</markup>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.4NBWkk.spl1" title="原文 : By default, Jib uses distroless/java as the base image.">デフォルトでは、Jibは<a href="https://github.com/GoogleContainerTools/distroless/tree/master/java" target="_blank">distroless/java</a>をベース・イメージとして使用します。</span> <span class="merged" id="all.4NBWkk.spl2" title="原文 : You can override the default with configuration see the documentation">構成でデフォルトをオーバーライドできます。<a href="https://github.com/GoogleContainerTools/jib/blob/v0.10.1-maven/jib-maven-plugin/jib-maven-plugin/README.md#extended-usage" target="_blank">documentation</a>を参照してください</span> </p>
</div>

<markup
lang="bash"
title="Package the updated application"
>mvn package</markup>

<markup
lang="bash"
title="Run the image"
>docker run --rm -p 8080:8080 jib-helidon-quickstart-se</markup>

<markup
lang="bash"
title="Ping the application"
>curl -X GET http://localhost:8080/greet</markup>

<markup
lang="bash"
title="Take a look at the image size"
>docker images jib-quickstart-se:latest</markup>

<markup
lang="bash"

>REPOSITORY          TAG           IMAGE ID      CREATED        SIZE
jib-quickstart-se   latest        384aebda5594  48 years ago   124MB <span class="conum" data-value="1" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.3bU8eu.spl1" title="原文 : Ignore the fact that it says the image was created 48 years ago.">イメージが48年前に作成された表示される事実は無視してください。</span> <span class="merged" id="all.3bU8eu.spl2" title="原文 : Refer to the Jib FAQ for explanations.">詳細は、<a href="https://github.com/GoogleContainerTools/jib/blob/v0.10.1-maven/jib-maven-plugin/docs/faq.md#why-is-my-image-created-48-years-ago" target="_blank">Jib FAQ</a>を参照してください。</span> </li>
</ul>

<div class="admonition note">
<p class="admonition-inline"><span class="merged" id="all.14SHvM" title="原文 : the Jib image is smaller because of the use of a distroless base image.">Jibイメージは、ディストロレス・ベース・イメージを使用しているため小さくなります。</span></p>
</div>

</div>

</doc-view>
