<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.4fCY0f" title="原文 : GraalVM Native Images">GraalVMネイティブ・イメージ</span></dt>
<dd slot="desc"><p><span class="merged" id="all.Sb3Dr" title="原文 : This guide describes how to build a GraalVM native image for a Helidon MP application.">このガイドでは、Helidon MPアプリケーションのGraalVMネイティブ・イメージをビルドする方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_introduction"><span class="merged" id="all.4LJMHk.2"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.41WSaP.spl1" title="原文 : Native images are ahead-of-time compiled Java code that result in a self contained native executable."><a href="https://www.graalvm.org/docs/reference-manual/aot-compilation/" target="_blank">「ネイティブ・イメージ」</a>は、自己完結型のネイティブ実行可能ファイルになるコンパイル済Javaコードです。</span> <span class="merged" id="all.41WSaP.spl2" title="原文 : When used appropriately native images have dramatically faster startup and lower runtime memory overhead compared to a Java VM.">適切にネイティブ・イメージを使用すると、Java VMに比べて起動が大幅に高速化され、ランタイム・メモリー・オーバーヘッドが削減されます。</span> </p>

<p><span class="merged" id="all.27nod5" title="原文 : In this guide you will learn how to build a native image locally on your machine, as well as using Docker.">このガイドでは、マシン上でネイティブ・イメージをローカルに構築する方法と、Dockerを使用する方法について説明します。</span></p>

</div>


<h2 id="_what_you_need"><span class="merged" id="all.27ZcMH.3"  title="原文:: What You Need">必要事項</span></h2>
<div class="section">
<p><span class="merged" id="all.2vag3o" title="原文 : For this 10 minute tutorial, you will need the following:">この10分間のチュートリアルでは、次のものが必要です:</span></p>


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
<td class=""><span class="merged" id="all.3J4a7U.1" title="原文 : A Helidon MP Application">Helidon MPアプリケーション</span></td>
<td class=""><span class="merged" id="all.13muNj.1" title="原文 : You can use your own application or use the Helidon MP Quickstart to create a sample application.">独自のアプリケーションを使用するか、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート」</router-link>を使用してサンプル・アプリケーションを作成できます。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2sRt9f.3" title="原文 : Java&#160;SE&#160;17 (Open&#160;JDK&#160;17)"><a href="https://www.oracle.com/technetwork/java/javase/downloads" target="_blank">Java&#160;SE&#160;17</a> (<a href="http://jdk.java.net" target="_blank">Open&#160;JDK&#160;17</a>)</span></td>
<td class=""><span class="merged" id="all.3aBChT.3" title="原文 : Helidon requires Java 17+.">HelidonにはJava 17以上が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1DYqqk.4" title="原文 : Maven 3.6.1+"><a href="https://maven.apache.org/download.cgi" target="_blank">Maven 3.6.1+</a></span></td>
<td class=""><span class="merged" id="all.3woDk0.3" title="原文 : Helidon requires Maven 3.6.1+.">Helidonには、Maven 3.6.1+が必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3ND1mN.3"  title="原文:: Docker 18.09+"><a href="https://docs.docker.com/install/" target="_blank">Docker 18.09+</a></span></td>
<td class=""><span class="merged" id="all.aX1BT.3" title="原文 : You need Docker if you want to build and deploy Docker containers.">Dockerコンテナをビルドおよびデプロイする場合は、Dockerが必要です。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4Lo77h.3"  title="原文:: Kubectl 1.16.5+"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">Kubectl 1.16.5+</a></span></td>
<td class=""><span class="merged" id="all.1JBSOB.3" title="原文 : If you want to deploy to Kubernetes, you need kubectl and a Kubernetes cluster (you can install one on your desktop.">Kubernetesにデプロイする場合は、<code>kubectl</code>およびKubernetesクラスタが必要です (<router-link to="/about/kubernetes">「デスクトップにインストール」</router-link>できます)。</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.PVTUY" title="原文 : GraalVM CE 21.0.0"><a href="https://github.com/graalvm/graalvm-ce-builds/releases/tag/vm-21.0.0" target="_blank">GraalVM CE 21.0.0</a></span></td>

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
export JAVA_HOME=`/usr/libexec/java_home -v 17`

# On Linux
# Use the appropriate path to your JDK
export JAVA_HOME=/usr/lib/jvm/jdk-17</markup>

</div>


<h2 id="_install_graalvm_and_the_native_image_command"><span class="merged" id="all.4BXqS7" title="原文 : Install GraalVM and the Native Image Command">GraalVMおよびネイティブ・イメージ・コマンドのインストール</span></h2>
<div class="section">
<p><span class="merged" id="all.4d1Ljy" title="原文 : After downloading and installing GraalVM, set the GRAALVM_HOME environment variable to point at your GraalVM installation."><a href="https://github.com/graalvm/graalvm-ce-builds/releases" target="_blank">「ダウンロードとインストール」</a> GraalVMの後、GraalVMインストールを指すように<code>GRAALVM_HOME</code>環境変数を設定します。</span></p>

<markup
lang="bash"

># Your path might be different
export GRAALVM_HOME=/usr/local/graalvm-ce-21.3.0/Contents/Home/</markup>

<p><span class="merged" id="all.3IZxtz" title="原文 : Then install the optional native-image command:">次に、オプションの<code>native-image</code>コマンドをインストールします:</span></p>

<markup
lang="bash"

>$GRAALVM_HOME/bin/gu install native-image</markup>

<p><span class="merged" id="all.pf2id" title="原文 : And verify:">さらに、次のことを確認します:</span></p>

<markup
lang="bash"

>$GRAALVM_HOME/bin/java -version
$GRAALVM_HOME/bin/native-image --version</markup>

</div>


<h2 id="_generate_the_project"><span class="merged" id="all.3GySK3" title="原文 : Generate the Project">プロジェクトを生成</span></h2>
<div class="section">
<p><span class="merged" id="all.2IGy7L" title="原文 : Generate the project using the Helidon MP Quickstart Maven archetype.">Helidon MP Quickstart Maven原型を使用してプロジェクトを生成します。</span></p>

<markup
lang="bash"

>mvn -U archetype:generate -DinteractiveMode=false \
    -DarchetypeGroupId=io.helidon.archetypes \
    -DarchetypeArtifactId=helidon-quickstart-mp \
    -DarchetypeVersion=3.0.2 \
    -DgroupId=io.helidon.examples \
    -DartifactId=helidon-quickstart-mp \
    -Dpackage=io.helidon.examples.quickstart.mp</markup>

<p><span class="merged" id="all.fjhNA.spl1" title="原文 : The archetype generates a Maven project in your current directory (for example, helidon-quickstart-mp).">archetypeは、現在のディレクトリ(たとえば、<code>helidon-quickstart-mp</code>)にMavenプロジェクトを生成します。</span> <span class="merged" id="all.fjhNA.spl2" title="原文 : Change into this directory and build.">このディレクトリに移動してビルドします。</span> </p>

<markup
lang="bash"

>cd helidon-quickstart-mp
mvn package</markup>

<p><span class="merged" id="all.4Wz5E2" title="原文 : At this point you can run the application using the JVM:">この時点で、JVMを使用してアプリケーションを実行できます:</span></p>

<markup
lang="bash"

>java -jar target/helidon-quickstart-mp.jar</markup>

<p><span class="merged" id="all.1C3z9k" title="原文 : In another shell test an endpoint:">別のシェルで、エンドポイントをテストします:</span></p>

<markup
lang="bash"

>curl -X GET http://localhost:8080/greet</markup>

<p><span class="merged" id="all.3IKx1l" title="原文 : The application should respond with {&quot;message&quot;:&quot;Hello World!&quot;}">アプリケーションは<code>{"message":"Hello World!"}</code>で応答する必要があります</span></p>

<p><span class="merged" id="all.1g8BVu" title="原文 : Now stop the running application (by pressing Ctrl+C).">(Ctrl+Cを押して)実行中のアプリケーションを停止します。</span></p>

<p><span class="merged" id="all.1nRpHB" title="原文 : For more information about the Quickstart application and other endpoints it supports see the Helidon MP Quickstart Guide.">Quickstartアプリケーションおよびサポートされているその他のエンドポイントの詳細は、<router-link to="/mp/guides/quickstart">「Helidon MPクイックスタート・ガイド」</router-link>を参照してください。</span></p>

</div>


<h2 id="_building_a_native_image"><span class="merged" id="all.237MTc"  title="原文: Building a Native Image">ネイティブ・イメージのビルド</span></h2>
<div class="section">
<p><span class="merged" id="all.4dEyqu" title="原文 : You can build a native executable in 2 different ways:">ネイティブ実行可能ファイルは、次の2つの方法でビルドできます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1W8zlj" title="原文 : With a local installation of GraalVM">GraalVMのローカル・インストール</span></p>

</li>
<li>
<p><span class="merged" id="all.1T4aj5" title="原文 : Using Docker">Dockerの使用</span></p>

</li>
</ul>


<h3 id="_local_build"><span class="merged" id="all.44pkHU" title="原文 : Local build">ローカル・ビルド</span></h3>
<div class="section">
<p><span class="merged" id="all.3ot5XQ" title="原文 : Make sure you have GraalVM locally installed:">GraalVMがローカルにインストールされていることを確認します:</span></p>

<markup
lang="bash"

>$GRAALVM_HOME/bin/native-image --version</markup>

<p><span class="merged" id="all.4ehNZU" title="原文 : Build the native image using the native image profile:">ネイティブ・イメージ・プロファイルを使用してネイティブ・イメージをビルドします:</span></p>

<markup
lang="bash"

>mvn package -Pnative-image</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6"  title="原文:: Tip">ヒント</span></p>
<p ><span class="merged" id="all.3E5t1v.spl1" title="原文 : This uses the helidon-maven-plugin to perform the native compilation using your installed copy of GraalVM.">これは、<code>helidon-maven-plugin</code>を使用し、インストールしたGraalVMのコピーを使用してネイティブ・コンパイルを実行します。</span> <span class="merged" id="all.3E5t1v.spl2" title="原文 : It might take a while to complete.">完了するまでに時間がかかる場合があります。</span> </p>
</div>

<p><span class="merged" id="all.2cZJIp" title="原文 : Once it completes start the application using the native executable (no JVM!):">完了したら、ネイティブの実行可能ファイル(JVMなし)を使用してアプリケーションを起動します。):</span></p>

<markup
lang="bash"

>./target/helidon-quickstart-mp</markup>

<p><span class="merged" id="all.2NHOSR.spl1" title="原文 : Yep, it starts fast.">はい、すぐに開始します。</span> <span class="merged" id="all.2NHOSR.spl2" title="原文 : You can exercise the application&rsquo;s endpoints as before.">以前と同様に、アプリケーションのエンドポイントを実行できます。</span> </p>

</div>


<h3 id="_multi_stage_docker_build"><span class="merged" id="all.wMzjC" title="原文 : Multi-stage Docker build">複数ステージのDockerビルド</span></h3>
<div class="section">
<p><span class="merged" id="all.4cz2lq" title="原文 : Build the &quot;native&quot; Docker image">「ネイティブ」Dockerイメージの作成</span></p>

<markup
lang="bash"

>docker build -t helidon-quickstart-mp-native -f Dockerfile.native .</markup>

<div class="admonition tip">
<p class="admonition-textlabel"><span class="merged" id="all.245DJ6.1"  title="原文:: Tip">ヒント</span></p>
<p ><span class="merged" id="all.3BIrNM.spl1" title="原文 : This does a full build inside the Docker container.">これにより、Dockerコンテナ内で完全なビルドが実行されます。</span> <span class="merged" id="all.3BIrNM.spl2" title="原文 : The first time you run it, it will take a while because it is downloading all of the Maven dependencies and caching them in a Docker layer.">初回実行時には、すべてのMaven依存関係をダウンロードしてDockerレイヤーにキャッシュするため、しばらく時間がかかります。</span> <span class="merged" id="all.3BIrNM.spl3" title="原文 : Subsequent builds will be much faster as long as you don&rsquo;t change the pom.xml file."><code>pom.xml</code>ファイルを変更しないかぎり、後続のビルドははるかに高速になります。</span> <span class="merged" id="all.3BIrNM.spl4" title="原文 : If the pom is modified then the dependencies will be re-downloaded.">POMが変更されると、依存関係が再ダウンロードされます。</span> </p>
</div>

<p><span class="merged" id="all.42Bugy" title="原文 : Start the application:">アプリケーションを起動します:</span></p>

<markup
lang="bash"

>docker run --rm -p 8080:8080 helidon-quickstart-mp-native:latest</markup>

<p><span class="merged" id="all.RH4Mw.spl1" title="原文 : Again, it starts fast.">ここでも、高速で起動します。</span> <span class="merged" id="all.RH4Mw.spl2" title="原文 : You can exercise the application&rsquo;s endpoints as before.">以前と同様に、アプリケーションのエンドポイントを実行できます。</span> </p>

</div>

</div>


<h2 id="_when_should_i_use_native_images"><span class="merged" id="all.GXac3" title="原文 : When should I use Native Images?">ネイティブ・イメージはどのような場合に使用しますか。</span></h2>
<div class="section">
<p><span class="merged" id="all.Z5owq" title="原文 : Native images are ideal for applications with high horizontal scalability requirements where the ability to rapidly scale out to numerous instances is important.">ネイティブ・イメージは、多数のインスタンスに迅速にスケール・アウトできることが重要な、高い水平スケーラビリティ要件を持つアプリケーションに最適です。</span></p>

<p><span class="merged" id="all.vXweu" title="原文 : That said, native images do have some limitations, and for long running applications where startup and footprint are less of a priority, the Java SE HotSpot VM might be more appropriate.">つまり、ネイティブ・イメージにはいくつかの<a href="https://github.com/oracle/graal/blob/master/substratevm/Limitations.md" target="_blank">「制限事項」</a>があり、起動とフットプリントの優先度が低い長時間実行アプリケーションでは、Java SE HotSpot VMの方が適している場合があります。</span></p>

<p><span class="merged" id="all.2nlUav" title="原文 : For information about creating custom Java runtime images see Custom Runtime Images with jlink.">カスタムJavaランタイム・イメージの作成の詳細は、<router-link to="/mp/guides/jlink-image">「<code>jlink</code>を使用したカスタム・ランタイム・イメージ」</router-link>を参照してください。</span></p>

</div>

</doc-view>
