<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.JbgHr"  title="原文:: Get Started">開始</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1yT48s" title="原文 : Everything you need to get started with Helidon is listed here.">Helidonを開始するために必要なものはすべてここにリストされています。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_prerequisites"><span class="merged" id="all.2LZvWc.2"  title="原文:: Prerequisites">前提条件</span></h2>
<div class="section">
<p><span class="merged" id="all.Spi7a.1.spl1" title="原文 : Helidon requires Java and Maven.">Helidonには、JavaおよびMavenが必要です。</span> <span class="merged" id="all.Spi7a.1.spl2" title="原文 : You might also need Docker and Kubernetes depending on how you plan to deploy your services.">サービスのデプロイ方法によっては、DockerおよびKubernetesも必要になる場合があります。</span> </p>

<div class="block-title"><span class="merged" id="all.1bFclg.1" title="原文 : Prerequisite product versions for Helidon 3.0.2"><span>Helidon 3.0.2の前提条件製品バージョン</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.2sRt9f.1" title="原文 : Java&#160;SE&#160;17 (Open&#160;JDK&#160;17)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java&#160;SE&#160;17</a> (<a href="http://jdk.java.net" target="_blank">Open&#160;JDK&#160;17</a>)</span></td>
<td class=""><span class="merged" id="all.3aBChT.1" title="原文 : Helidon requires Java 17+.">HelidonにはJava 17以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DYqqk.2" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.1" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.1"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.1" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.1"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.1" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
</tr>
</tbody>
</table>
</div>

<markup
lang="bash"
title="Verify Prerequisites"
>java -version
mvn --version
docker --version
kubectl version --short</markup>

</div>


<h2 id="_setting_java_home"><span class="merged" id="all.1St5L6" title="原文 : Setting JAVA_HOME"><code>JAVA_HOME</code>の設定</span></h2>
<div class="section">
<markup
lang="bash"
title="Setting <code>JAVA_HOME</code>"
># On Mac
export JAVA_HOME=`/usr/libexec/java_home -v 17`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-17</markup>

</div>


<h2 id="_try_the_quickstart_examples"><span class="merged" id="all.8vBtD" title="原文 : Try the Quickstart Examples">Quickstartの例を試す</span></h2>
<div class="section">
<p><span class="merged" id="all.1c8NIC" title="原文 : Now you are ready to try the Quickstart Examples:">これで、Quickstartの例を試す準備ができました:</span></p>

<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.2n30vz" title="原文 : Helidon MP Quickstart Example"><router-link to="/mp/guides/quickstart">Helidon MPクイックスタートの例</router-link></span>

</li>
<li>
<span class="merged" id="all.AaG4f" title="原文 : Helidon SE Quickstart Example"><router-link to="/se/guides/quickstart">Helidon SEクイックスタートの例</router-link></span>

</li>
</ol>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.3t5QaM" title="原文 : See About Helidon for more information on the differences between Helidon MP and SE.">Helidon MPとSEの違いの詳細は、<router-link to="/about/introduction">「Helidonについて」</router-link>を参照してください。</span></p>
</div>

<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.27xKtt" title="原文 : See Helidon on Windows for some tips on using Helidon on Windows.">WindowsでのHelidonの使用に関するヒントは、<router-link to="/about/windows">「Windows上のHelidon」</router-link>を参照してください。</span></p>
</div>

</div>

</doc-view>
