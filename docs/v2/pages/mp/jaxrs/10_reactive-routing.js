<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3Ihgvm" title="原文 : Reactive routing in Helidon MP">Helidon MPのリアクティブ・ルーティング</span></dt>
<dd slot="desc"><p><span class="merged" id="all.1CNuvz" title="原文 : Since Helidon 1.4">Helidon 1.4以降</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_configuring_a_reactive_route_in_helidon_mp"><span class="merged" id="all.3BxtHw" title="原文 : Configuring a reactive route in Helidon MP">Helidon MPでのリアクティブ・ルートの構成</span></h2>
<div class="section">
<p><span class="merged" id="all.41WzgC" title="原文 : Helidon MP Server will pick up CDI beans that implement the io.helidon.webserver.Service interface and configure them with the underlying WebServer.">Helidon MPサーバーは、<code>io.helidon.webserver.Service</code>インタフェースを実装するCDI beanを取得し、基礎となるWebServerで構成します。</span></p>

<p><span class="merged" id="all.2vC9Db" title="原文 : This allows configuration of reactive routes to run alongside a JAX-RS application.">これにより、JAX-RSアプリケーションとともに実行するようにリアクティブ・ルートを構成できます。</span></p>

<p><span class="merged" id="all.3agqZo" title="原文 : The bean is expected to be either ApplicationScoped or Dependent and will be requested only once during the boot of the Server.">Beanは<code>ApplicationScoped</code>または<code>Dependent</code>のいずれかである必要があり、<code>Server</code>の起動時に一度のみリクエストされます。</span></p>

<p><span class="merged" id="all.23KB4w.spl1" title="原文 : The bean will support injection of ApplicationScoped and Dependent scoped beans.">Beanは、<code>ApplicationScoped</code>および<code>Dependent</code>スコープのbeanのインジェクションをサポートします。</span> <span class="merged" id="all.23KB4w.spl2" title="原文 : You cannot inject RequestScoped beans."><code>RequestScoped</code> beanはインジェクトできません。</span> <span class="merged" id="all.23KB4w.spl3" title="原文 : Please use WebServer features to handle request related objects.">リクエスト関連オブジェクトを処理するには、WebServer機能を使用してください。</span> </p>


<h3 id="_customizing_the_reactive_service"><span class="merged" id="all.3AcIGx" title="原文 : Customizing the reactive service">リアクティブ・サービスのカスタマイズ</span></h3>
<div class="section">
<p><span class="merged" id="all.gxsb7" title="原文 : The service can be customized using annotations and/or configuration to be">サービスは、次のように注釈または構成(あるいはその両方)を使用してカスタマイズできます</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2IKoEc" title="原文 : registered on a specific path">特定のパスに登録済</span></p>

</li>
<li>
<p><span class="merged" id="all.1osxWr" title="原文 : registered with a named routing">名前付きルーティングに登録済</span></p>

</li>
</ul>

<h4 id="_assigning_a_reactive_service_to_named_ports"><span class="merged" id="all.xaE2V" title="原文 : Assigning a reactive service to named ports">名前付きポートへのリアクティブ・サービスの割り当て</span></h4>
<div class="section">
<p><span class="merged" id="all.1BsDre.spl1" title="原文 : Helidon has the concept of named routings.">Helidonには、名前付きルーティングの概念があります。</span> <span class="merged" id="all.1BsDre.spl2" title="原文 : These correspond to the named ports configured with WebServer.">これらは、WebServerで構成された名前付きポートに対応します。</span> </p>

<p><span class="merged" id="all.2s4EDH" title="原文 : You can assign a reactive service to a named routing (and as a result to a named port) using either an annotation or configuration (or both to override the value from annotation).">注釈または構成(あるいはその両方)を使用して、名前付きルーティングにリアクティブ・サービスを割り当てることができます(その結果、注釈の値をオーバーライドします)。</span></p>


<h5 id="_annotation_routingname"><span class="merged" id="all.3Pn5Xy.1" title="原文 : Annotation @RoutingName">注釈<code>@RoutingName</code></span></h5>
<div class="section">
<p><span class="merged" id="all.2zy2k1" title="原文 : You can annotate a service bean with this annotation to assign it to a specific named routing, that is (most likely) going to be bound to a specific port.">サービスBeanにこの注釈を付けて、特定の名前付きルーティング(おそらく特定のポートにバインドされる)に割り当てることができます。</span></p>

<p><span class="merged" id="all.1TxjbJ.1" title="原文 : The annotation has two attributes: - value that defines the routing name - required to mark that the routing name MUST be configured in Helidon server">注釈には2つの属性があります: - <code>value</code>はルーティング名を定義します - <code>required</code>はルーティング名をHelidonサーバーで構成する必要があることを示します</span></p>

<markup
lang="java"
title="<code>@RoutingName</code>の例"
>@ApplicationScoped
@RoutingName(value="admin", required="true")
@RoutingPath("/admin")
public class AdminService implements Service {
//....
}</markup>

<p><span class="merged" id="all.3jexaQ.1" title="原文 : The example above will be bound to admin routing (and port) and will fail if such a port is not configured.">前述の例は、<code>admin</code>ルーティング(およびポート)にバインドされ、そのようなポートが構成されていない場合は失敗します。</span></p>

</div>

<h5 id="_configuration_override_of_routing_name"><span class="merged" id="all.1jqoi9.1" title="原文 : Configuration override of routing name">ルーティング名の構成オーバーライド</span></h5>
<div class="section">
<p><span class="merged" id="all.evfxA.spl1" title="原文 : For each service bean you can define the routing name and its required flag by specifying a configuration option bean-class-name.routing-name.name and bean-class-name.routing-name.required.">サービスBeanごとに、構成オプション<code>bean-class-name.routing-name.name</code>および<code>bean-class-name.routing-name.required</code>を指定して、ルーティング名とその必須フラグを定義できます。</span> <span class="merged" id="all.evfxA.spl2" title="原文 : For service beans produced with producer method replace bean-class-name with class-name.producer-method-name.">プロデューサ・メソッドを使用して生成されたサービスBeanの場合は、<code>bean-class-name</code>を<code>class-name.producer-method-name</code>に置き換えます。</span> </p>

<p><span class="merged" id="all.2LQ61V" title="原文 : Example (YAML) configuration for a service bean io.helidon.examples.AdminService that changes the routing name to management and its required flag to false:">ルーティング名を<code>management</code>に変更し、その必須フラグを<code>false</code>に変更するサービスBean <code>io.helidon.examples.AdminService</code>の構成例(YAML):</span></p>

<markup
lang="yaml"

>io.helidon.examples.AdminService:
  routing-name:
    name: "management"
    required: false</markup>

</div>
</div>

<h4 id="_configuring_a_reactive_service_path"><span class="merged" id="all.452eRd" title="原文 : Configuring a reactive service path">リアクティブ・サービス・パスの構成</span></h4>
<div class="section">
<p><span class="merged" id="all.262xNw.spl1" title="原文 : Each service is registered on a path.">各サービスはパスに登録されます。</span> <span class="merged" id="all.262xNw.spl2" title="原文 : If none is configured, then the service would be configured on the root path.">構成されていない場合、サービスはルート・パスで構成されます。</span> </p>

<p><span class="merged" id="all.35hyq" title="原文 : You can configure service path using an annotation or configuration (or both to override value from annotation)">注釈または構成(あるいはその両方)を使用してサービス・パスを構成し、注釈の値をオーバーライドできます</span></p>


<h5 id="_annotation_routingpath"><span class="merged" id="all.43PmL2" title="原文 : Annotation @RoutingPath">注釈<code>@RoutingPath</code></span></h5>
<div class="section">
<p><span class="merged" id="all.fDAue" title="原文 : You can configure @RoutingPath to define the path a service is registered on."><code>@RoutingPath</code>を構成して、サービスが登録されるパスを定義できます。</span></p>

</div>

<h5 id="_configuration_override_of_routing_path"><span class="merged" id="all.D6Ugy" title="原文 : Configuration override of routing path">ルーティング・パスの構成オーバーライド</span></h5>
<div class="section">
<p><span class="merged" id="all.428E8z" title="原文 : For each reactive service class you can define the routing path by specifying a configuration option class-name.routing-path.path.">リアクティブ・サービス・クラスごとに、構成オプション<code>class-name.routing-path.path</code>を指定してルーティング・パスを定義できます。</span></p>

<p><span class="merged" id="all.I15il" title="原文 : Example (YAML) configuration for a class io.helidon.example.AdminService that changes the routing path to /management:">ルーティング・パスを<code>/management</code>に変更するクラス<code>io.helidon.example.AdminService</code>の例(YAML)構成:</span></p>

<markup
lang="yaml"

>io.helidon.examples.AdminService:
  routing-path:
    path: "/management"</markup>

</div>
</div>
</div>

<h3 id="_example_configuration_of_reactive_service"><span class="merged" id="all.C3lHy" title="原文 : Example configuration of reactive service">リアクティブ・サービスの構成例</span></h3>
<div class="section">
<p><span class="merged" id="all.Uu6pj.1" title="原文 : A full configuration example (YAML):">完全な構成例(YAML):</span></p>

<markup
lang="yaml"

>server:
  port: 8080
  sockets:
    management:
      port: 8090

io.helidon.examples.AdminService:
  routing-name:
    name: "management"
    required: true
  routing-path:
    path: "/management"</markup>

</div>
</div>
</doc-view>
