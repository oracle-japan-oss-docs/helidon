<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.2kiFnl" title="原文 : Custom Runtime Images with `jlink`">`jlink`を使用したカスタム・ランタイム・イメージ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1X8uFJ" title="原文 : This guide describes how to build a custom runtime image for your Helidon application using Helidon’s support for the JDK’s jlink tool.">このガイドでは、HelidonによるJDKの<code>jlink</code>ツールのサポートを使用して、Helidonアプリケーションのカスタム・ランタイム・イメージをビルドする方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.5"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.1cUl5U.spl1" title="原文 : JDK 9 introduced the jlink command that supports assembling a set of modules and their dependencies into a custom runtime image.">JDK 9では、一連のモジュールとその依存関係のカスタム・ランタイム・イメージへのアセンブルをサポートする<a href="https://docs.oracle.com/en/java/javase/21/docs/specs/man/jlink.html" target="_blank"><code>jlink</code></a>コマンドが導入されました。</span> <span class="merged" id="all.1cUl5U.spl2" title="原文 : The helidon-maven-plugin has support for easily creating a custom runtime image for your Helidon application resulting in a smaller, better performing runtime."><code>helidon-maven-plugin</code>では、Helidonアプリケーションのカスタム・ランタイム・イメージの簡単な作成がサポートされているため、実行時間が小さくなり、パフォーマンスが向上します。</span> </p>

<p><span class="merged" id="all.267xx2" title="原文 : In this guide you will learn how to build a custom runtime image locally on your machine, as well as how to build it in a Docker image.">このガイドでは、マシンでカスタム・ランタイム・イメージをローカルにビルドする方法と、Dockerイメージでビルドする方法について説明します。</span></p>

</div>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.6"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.2vag3o.1" title="原文 : For this 10 minute tutorial, you will need the following:">この10分間のチュートリアルでは、次のものが必要です:</span></p>


<div class="table__overflow elevation-1  flex sm7
">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3J4a7U.4" title="原文 : A Helidon MP Application">Helidon MPアプリケーション</span></td>
<td class=""><span class="merged" id="all.13muNj.4" title="原文 : You can use your own application or use the Helidon MP Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.17vEm3.7" title="原文 : Java&#160;SE&#160;21 (Open&#160;JDK&#160;21)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java SE 21</a> (<a href="http://jdk.java.net" target="_blank">JDK 21を開く</a>)</span></td>
<td class=""><span class="merged" id="all.3uVV7D.7" title="原文 : Helidon requires Java 21+.">HelidonにはJava 21+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.UWTyd.7" title="原文 : Maven 3.8+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.8+</a></span></td>
<td class=""><span class="merged" id="all.47RJEf.7" title="原文 : Helidon requires Maven 3.8+.">HelidonにはMaven 3.8+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.7"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.7" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.7"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.7" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
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

<markup
lang="bash"
title="Setting JAVA_HOME"
># On Mac
export JAVA_HOME=`/usr/libexec/java_home -v 21`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-21</markup>

</div>


<h2 id="_verify_jdk"><span class="merged" id="all.wLhSL" title="原文 : Verify JDK">JDKの検証</span></h2>
<div class="section">
<p><span class="merged" id="all.gbRmG" title="原文 : As noted in the prerequisites above, JDK 21 or newer is required.">前述の前提条件で説明したように、JDK 21以降が必要です。</span></p>

<markup
lang="bash"

>$JAVA_HOME/bin/java --version</markup>

<p><span class="merged" id="all.4bW0Ed.spl1" title="原文 : Creating a custom runtime image requires that the JDK modules are present as *.jmod files, and some distributions do not provide them by default.">カスタム・ランタイム・イメージを作成するには、JDKモジュールが<code>*.jmod</code>ファイルとして存在する必要があり、一部のディストリビューションではデフォルトで提供されません。</span> <span class="merged" id="all.4bW0Ed.spl2" title="原文 : Check the jmods directory to ensure they are present:"><code>jmods</code>ディレクトリが存在することを確認します:</span> </p>

<markup
lang="bash"

>ls $JAVA_HOME/jmods</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.3C24KS" title="原文 : OpenJDK on Linux">Linux上のOpenJDK</span></p>
<p ><span class="merged" id="all.4fJuAz.spl1" title="原文 : RPM based distributions provide *.jmod files in separate java-*-openjdk-jmods packages."><a href="https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based" target="_blank">「RPMベース」</a>ディストリビューションでは、<code>*.jmod</code>ファイルが個別の<code>java-*-openjdk-jmods</code>パッケージで提供されます。</span> <span class="merged" id="all.4fJuAz.spl2" title="原文 : Debian based distributions provide *.jmod files only in the openjdk-*-jdk-headless packages."><a href="https://en.wikipedia.org/wiki/List_of_Linux_distributions#Debian-based" target="_blank">「Debianベース」</a>ディストリビューションは、<code>openjdk-*-jdk-headless</code>パッケージでのみ<code>*.jmod</code>ファイルを提供します。</span> </p>
</div>

</div>


<h2 id="_generate_the_project"><span class="merged" id="all.3GySK3.1" title="原文 : Generate the Project">プロジェクトを生成</span></h2>
<div class="section">
<p><span class="merged" id="all.2IGy7L.1" title="原文 : Generate the project using the Helidon MP Quickstart Maven archetype.">Helidon MP Quickstart Maven原型を使用してプロジェクトを生成します。</span></p>

<markup
lang="bash"

>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=4.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

<p><span class="merged" id="all.fjhNA.1.spl1" title="原文 : The archetype generates a Maven project in your current directory (for example, helidon-quickstart-mp).">archetypeは、現在のディレクトリ(たとえば、<code>helidon-quickstart-mp</code>)にMavenプロジェクトを生成します。</span> <span class="merged" id="all.fjhNA.1.spl2" title="原文 : Change into this directory and build.">このディレクトリに移動してビルドします。</span> </p>

<markup
lang="bash"

>cd helidon-quickstart-mp
mvn package</markup>

<p><span class="merged" id="all.4Wz5E2.1" title="原文 : At this point you can run the application using the JVM:">この時点で、JVMを使用してアプリケーションを実行できます:</span></p>

<markup
lang="bash"

>java -jar target/helidon-quickstart-mp.jar</markup>

<p><span class="merged" id="all.1C3z9k.1" title="原文 : In another shell test an endpoint:">別のシェルで、エンドポイントをテストします:</span></p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/greet</markup>

<p><span class="merged" id="all.3IKx1l.1" title="原文 : The application should respond with {&quot;message&quot;:&quot;Hello World!&quot;}">アプリケーションは<code>{"message":"Hello World!"}</code>で応答する必要があります</span></p>

<p><span class="merged" id="all.1g8BVu.1" title="原文 : Now stop the running application (by pressing Ctrl+C).">(Ctrl+Cを押して)実行中のアプリケーションを停止します。</span></p>

<p><span class="merged" id="all.1rP8n6" title="原文 : For more information about the Quickstart application and other endpoints it supports see the Helidon MP quickstart Guide.">Quickstartアプリケーションおよびサポートされているその他のエンドポイントの詳細は、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート・ガイド」</router-link>を参照してください。</span></p>

</div>


<h2 id="_building_a_custom_runtime_image"><span class="merged" id="all.1DY9Zr" title="原文 : Building a Custom Runtime Image">カスタム・ランタイム・イメージのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.2KfOsD" title="原文 : You can build a custom runtime image in 2 different ways:">カスタム・ランタイム・イメージは、次の2つの方法でビルドできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.TT8iJ" title="原文 : Locally, on your desktop">ローカル、デスクトップ上</span></p>

</li>
<li>
<p><span class="merged" id="all.1T4aj5.1"  title="原文:: Using Docker">Dockerの使用</span></p>

</li>
</ul>


<h3 id="_local_build"><span class="merged" id="all.Zgu5Y" title="原文 : Local Build">ローカル・ビルド</span></h3>
<div class="section">
<p><span class="merged" id="all.4Cr5T3" title="原文 : Build the custom runtime image using the jlink image profile:">jlinkイメージ・プロファイルを使用して、カスタム・ランタイム・イメージをビルドします:</span></p>

<markup
lang="bash"

>mvn package -Pjlink-image</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.2"  title="原文:: Tip">ヒント</span></p>
<p ><span class="merged" id="all.3LvwrX" title="原文 : This uses the helidon-maven-plugin to perform the custom image generation.">これは、<code>helidon-maven-plugin</code>を使用してカスタム・イメージの生成を実行します。</span></p>
</div>

<p><span class="merged" id="all.1wrkc9" title="原文 : After the build completes it will report some statistics about the build including the reduction in image size.">ビルドが完了すると、イメージ・サイズの縮小など、ビルドに関する統計がレポートされます。</span></p>

<p><span class="merged" id="all.2deg64.spl1" title="原文 : The target/helidon-quickstart-mp-jri directory is a self contained custom image of your application."><code>target/helidon-quickstart-mp-jri</code>ディレクトリは、アプリケーションの自己完結型カスタム・イメージです。</span> <span class="merged" id="all.2deg64.spl2" title="原文 : It contains your application, its runtime dependencies and the JDK modules it depends on.">これには、アプリケーション、そのランタイム依存関係および依存するJDKモジュールが含まれます。</span> <span class="merged" id="all.2deg64.spl3" title="原文 : You can start your application using the provide start script:">提供された<code>start</code>スクリプトを使用してアプリケーションを起動できます:</span> </p>

<markup
lang="bash"

>./target/helidon-quickstart-mp-jri/bin/start</markup>

</div>


<h3 id="_class_data_sharing_cds_archive"><span class="merged" id="all.IjY0U" title="原文 : Class Data Sharing (CDS) Archive">クラス・データ共有(CDS)アーカイブ</span></h3>
<div class="section">
<p><span class="merged" id="all.2HqeOg.spl1" title="原文 : Also included in the custom image is a Class Data Sharing (CDS) archive that improves your application’s startup performance and in-memory footprint.">カスタム・イメージには、アプリケーションの起動パフォーマンスおよびメモリー内フットプリントを向上させるクラス・データ共有(CDS)アーカイブも含まれています。</span> <span class="merged" id="all.2HqeOg.spl2" title="原文 : You can learn more about Class Data Sharing in the JDK documentation.">クラス・データ共有の詳細は、<a href="https://docs.oracle.com/en/java/javase/21/vm/class-data-sharing.html" target="_blank">「JDKのドキュメント」</a>を参照してください。</span> </p>

<p><span class="merged" id="all.23IEEy.spl1" title="原文 : The CDS archive increases your image size to get these performance optimizations.">CDSアーカイブは、これらのパフォーマンスを最適化するためにイメージ・サイズを増やします。</span> <span class="merged" id="all.23IEEy.spl2" title="原文 : It can be of significant size (tens of MB).">サイズが大きい場合があります(数十MB)。</span> <span class="merged" id="all.23IEEy.spl3" title="原文 : The size of the CDS archive is reported at the end of the build output.">CDSアーカイブのサイズは、ビルド出力の最後に報告されます。</span> </p>

<p><span class="merged" id="all.4P1eEO" title="原文 : If you’d rather have a smaller image size (with a slightly increased startup time) you can skip the creation of the CDS archive by executing your build like this:">(起動時間を少し長くして)イメージ・サイズを小さくする場合は、次のようにビルドを実行してCDSアーカイブの作成をスキップできます:</span></p>

<markup
lang="bash"

>mvn package -Pjlink-image -Djlink.image.addClassDataSharingArchive=false</markup>

<p><span class="merged" id="all.4PaCXf" title="原文 : For more information on available configuration options see the helidon-maven-plugin documentation.">使用可能な構成オプションの詳細は、<a href="https://github.com/oracle/helidon-build-tools/blob/3.0.5/maven-plugins/helidon-maven-plugin/README.md#goal-jlink-image" target="_blank">「<code>helidon-maven-plugin</code>のドキュメント」</a>を参照してください。</span></p>

</div>


<h3 id="_multi_stage_docker_build"><span class="merged" id="all.3Dl0KI" title="原文 : Multi-Stage Docker Build">マルチ・ステージDockerビルド</span></h3>
<div class="section">
<p><span class="merged" id="all.35OX73" title="原文 : To build a Docker image with a custom Java runtime image use the jlink Dockerfile included with the quickstart.">カスタムJavaランタイム・イメージを使用してDockerイメージをビルドするには、クイックスタートに含まれるjlink Dockerfileを使用します。</span></p>

<markup
lang="bash"

>docker build -t helidon-quickstart-mp-jri -f Dockerfile.jlink .</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.3"  title="原文:: Tip">ヒント</span></p>
<p ><span class="merged" id="all.3BIrNM.1.spl1" title="原文 : This does a full build inside the Docker container.">これにより、Dockerコンテナ内で完全なビルドが実行されます。</span> <span class="merged" id="all.3BIrNM.1.spl2" title="原文 : The first time you run it, it will take a while because it is downloading all of the Maven dependencies and caching them in a Docker layer.">初回実行時には、すべてのMaven依存関係をダウンロードしてDockerレイヤーにキャッシュするため、しばらく時間がかかります。</span> <span class="merged" id="all.3BIrNM.1.spl3" title="原文 : Subsequent builds will be much faster as long as you don’t change the pom.xml file."><code>pom.xml</code>ファイルを変更しないかぎり、後続のビルドははるかに高速になります。</span> <span class="merged" id="all.3BIrNM.1.spl4" title="原文 : If the pom is modified then the dependencies will be re-downloaded.">POMが変更されると、依存関係が再ダウンロードされます。</span> </p>
</div>

<p><span class="merged" id="all.42Bugy.1" title="原文 : Start the application:">アプリケーションを起動します:</span></p>

<markup
lang="bash"

>docker run --rm -p 8080:8080 helidon-quickstart-mp-jri:latest</markup>

<p><span class="merged" id="all.38WD5I" title="原文 : You can exercise the application’s endpoints as before.">以前と同様に、アプリケーションのエンドポイントを実行できます。</span></p>

</div>

</div>


<h2 id="_using_custom_runtime_images"><span class="merged" id="all.nY3BX" title="原文 : Using Custom Runtime Images">カスタム・ランタイム・イメージの使用</span></h2>
<div class="section">
<p><span class="merged" id="all.2erVd6" title="原文 : Custom runtime images are ideal for use when you want all of the runtime performance of the JDK JVM in a reasonably compact form.">カスタム・ランタイム・イメージは、JDK JVMのすべてのランタイム・パフォーマンスを適切にコンパクトな形式にする場合に使用すると理想的です。</span></p>

<p><span class="merged" id="all.4P7dMj" title="原文 : For cases where absolute minimal startup time and image size are required, then consider using GraalVM Native Images.">起動時間とイメージの絶対最小サイズが必要な場合は、<router-link to="/mp/guides/graalnative">「GraalVMネイティブ・イメージ」</router-link>の使用を検討してください。</span></p>

</div>

</doc-view>
