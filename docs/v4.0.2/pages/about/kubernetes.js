<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1xzc4T" title="原文 : Kubernetes on your Desktop">デスクトップ上のKubernetes</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3Q6m1V.spl1" title="原文 : For development it’s often convenient to run Kubernetes on your desktop.">開発には、多くの場合、デスクトップでKubernetesを実行すると便利です。</span> <span class="merged" id="all.3Q6m1V.spl2" title="原文 : Two popular ways to do this are with Kubernetes Minikube or Kubernetes support in Docker for Desktop.">これを行う一般的な方法は、<a href="https://kubernetes.io/docs/getting-started-guides/minikube/" target="_blank">Kubernetes Minikube</a>または<a href="https://docs.docker.com/docker-for-mac/kubernetes/" target="_blank">「Docker for DesktopでのKubernetesのサポート」</a>を使用する方法です。</span> </p>

<p><span class="merged" id="all.2E3gue" title="原文 : In this guide we’ll use Docker for Desktop.">このガイドでは、Docker for Desktopを使用します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>


<h2 id="_install"><span class="merged" id="all.46rSDN"  title="原文:: Install">インストール</span></h2>
<div class="section">
<p><span class="merged" id="all.1vGD9J" title="原文 : Install Docker for Mac or Docker for Windows."><a href="https://docs.docker.com/docker-for-mac/install/" target="_blank">Docker for Mac</a>または<a href="https://docs.docker.com/docker-for-windows/install/" target="_blank">Docker for Windows</a>をインストールします。</span></p>

<p><span class="merged" id="all.YPIhV" title="原文 : Starting with version 18.06 Docker for Desktop includes Kubernetes support.">バージョン以降、18.06 Docker for DesktopにはKubernetesサポートが含まれています。</span></p>

</div>


<h2 id="_enable_kubernetes_support"><span class="merged" id="all.4cXYLP" title="原文 : Enable Kubernetes Support">Kubernetesサポートの有効化</span></h2>
<div class="section">
<p><span class="merged" id="all.Cm76B" title="原文 : Enable Kubernetes Support for Mac or Kubernetes Support for Windows."><a href="https://docs.docker.com/docker-for-mac/#kubernetes" target="_blank">「Macに対するKubernetesのサポート」</a>または<a href="https://docs.docker.com/docker-for-windows/#kubernetes" target="_blank">「KubernetesでのWindowsのサポート」</a>を有効にします。</span></p>

<p><span class="merged" id="all.2UvNUr" title="原文 : Once Kubernetes installation is complete, make sure you have your context set correctly to use docker-for-desktop.">Kubernetesのインストールが完了したら、docker-for-desktopを使用するようにコンテキストが正しく設定されていることを確認します。</span></p>

<markup
lang="bash"
title="Make sure K8s context is set to docker-for-desktop"
>kubectl config get-contexts
kubectl config use-context docker-for-desktop
kubectl cluster-info
kubectl version --short
kubectl get nodes</markup>

</div>

</doc-view>
