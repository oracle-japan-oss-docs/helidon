<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.3xuWTM" title="原文 : Metrics-Capable Modules">メトリクス対応モジュール</span></dt>
<dd slot="desc"><p><span class="merged" id="all.3UP7Sq" title="原文 : This document explains Helidon MP metrics-capable components and applications and describes how to create and control them.">このドキュメントは、Helidon MPメトリクス対応のコンポーネントおよびアプリケーションについて説明し、それらを作成および制御する方法について説明します。</span></p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_introduction"><span class="merged" id="all.4LJMHk.8"  title="原文:: Introduction">導入</span></h2>
<div class="section">
<p><span class="merged" id="all.mnXpt" title="原文 : Think of Helidon metrics in three related but different parts:">3つの関連するが様々な部分のHelidonメトリクスを考えてみます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2vmB9" title="原文 : The Helidon metrics API allows your code to register, look-up, remove, and update metrics using the RegistryFactory, MetricRegistry, and individual metrics interfaces.">HelidonメトリクスAPIを使用すると、<code>RegistryFactory</code>、<code>MetricRegistry</code>および個々のメトリクス・インタフェースを使用して、コードでメトリクスを登録、参照、削除および更新できます。</span></p>

</li>
<li>
<p><span class="merged" id="all.FyRlq" title="原文 : Helidon provides two implementations of the Helidon metrics API and selects which one to use at runtime, based on what components are present on the runtime path and whether metrics is configured to be enabled or disabled.">Helidonは、HelidonメトリクスAPIの2つの実装を提供し、ランタイム・パスに存在するコンポーネントと、メトリクスが有効または無効に構成されているかどうかに基づいて、実行時に使用するコンポーネントを選択します。</span></p>

</li>
<li>
<p><span class="merged" id="all.1CbBOy.spl1" title="原文 : The built-in Helidon metrics web service supports the /metrics endpoints by which clients can retrieve metadata and values of the registered metrics.">組込みのHelidonメトリクスwebサービスでは、クライアントが登録済メトリクスのメタデータおよび値を取得できる<code>/metrics</code>エンドポイントがサポートされます。</span> <span class="merged" id="all.1CbBOy.spl2" title="原文 : Helidon MP apps which use metrics enable the metrics service by default.">メトリクスを使用するHelidon MPアプリケーションは、メトリクス・サービスをデフォルトで有効にします。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.1k4NDd.spl1" title="原文 : As you plan and write Helidon components and applications, you make some choices about exactly how your code will use metrics.">Helidonコンポーネントおよびアプリケーションを計画および記述するとき、コードでメトリクスを使用する方法について、いくつかの選択を行います。</span> <span class="merged" id="all.1k4NDd.spl2" title="原文 : This guide gives some background information, describes the choices you face, explains their ramifications, and provides some code examples.">このガイドでは、バックグラウンド情報を示し、対象の選択肢について説明し、その影響について説明し、いくつかのコード例を提供します。</span> </p>

</div>

<h2 id="_categorizing_metrics_usage"><span class="merged" id="all.1PB3e4" title="原文 : Categorizing Metrics Usage">メトリクス使用状況のカテゴリ化</span></h2>
<div class="section">
<p><span class="merged" id="all.19KbmP.spl1" title="原文 : We can place each Helidon component and Helidon application into one of three categories based on how it relies on metrics.">各HelidonコンポーネントおよびHelidonアプリケーションを、メトリクスに依存する方法に基づいて3つのカテゴリのいずれかに配置できます。</span> <span class="merged" id="all.19KbmP.spl2" title="原文 : The type of module dictates the compile-time dependency you declare in the project pom.xml.">モジュールのタイプによって、プロジェクト<code>pom.xml</code>で宣言するコンパイル時の依存関係が指定されます。</span> </p>

<div class="block-title"><span class="merged" id="all.2uNq9y" title="原文 : Types of Metrics Usage"><span>メトリクス使用のタイプ</span></span></div>
<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 12.5%;">
<col style="width: 12.5%;">
<col style="width: 75%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4X2ZoX" title="原文 : Registers, updates, removes metrics?">メトリクスの登録、更新、削除を行いますか。</span></th>
<th><span class="merged" id="all.zbPJX" title="原文 : Refers to metrics values?">メトリクス値を参照しますか。</span></th>
<th><span class="merged" id="all.4fmvjz"  title="原文:: Category">カテゴリ</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.3ZmkTL" title="原文 : times"><v-icon>times</v-icon></span>
</td>
<td class=""><span class="merged" id="all.3ZmkTL.1" title="原文 : times"><v-icon>times</v-icon></span>
</td>
<td class=""><span class="merged" id="all.zzw1z" title="原文 : metrics-independent">metrics-independent</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3eV2IV" title="原文 : check"><v-icon>check</v-icon></span>
</td>
<td class=""><span class="merged" id="all.3ZmkTL.2" title="原文 : times"><v-icon>times</v-icon></span>
</td>
<td class=""><span class="merged" id="all.3ujGAC" title="原文 : metrics-capable">metrics-capable</span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.3eV2IV.1" title="原文 : check"><v-icon>check</v-icon></span>
</td>
<td class=""><span class="merged" id="all.3eV2IV.2" title="原文 : check"><v-icon>check</v-icon></span>
</td>
<td class=""><span class="merged" id="all.14pkxt" title="原文 : metrics-dependent">metrics-dependent</span></td>
</tr>
</tbody>
</table>
</div>
<p><span class="merged" id="all.yASaS" title="原文 : Whenever possible, if your component or app uses metrics write it as metrics-capable code.">可能な場合は常に、コンポーネントまたはアプリケーションがメトリクス対応コードとしてメトリクスを記述します。</span></p>

</div>

<h2 id="_understanding_the_two_metrics_implementations"><span class="merged" id="all.WjCl0" title="原文 : Understanding the Two Metrics Implementations">2つのメトリクスの実装の理解</span></h2>
<div class="section">
<p><span class="merged" id="all.2kWTFG" title="原文 : Helidon provides two metrics implementations.">Helidonは、2つのメトリクス実装を提供します。</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.pfLnL.spl1" title="原文 : Full-featured metrics allows registering, removing, and updating metrics and observing metrics&apos; changing values."><em>「フル装備」</em>のメトリクスでは、メトリクスの登録、削除および更新、およびメトリクスの値の変更を監視できます。</span> <span class="merged" id="all.pfLnL.spl2" title="原文 : The helidon-metrics component contains full-featured metrics."><code>helidon-metrics</code>コンポーネントには、フル機能のメトリクスが含まれます。</span> </p>

</li>
<li>
<p><span class="merged" id="all.3J1Hhj.spl1" title="原文 : Minimal metrics supports registering, removing, and updating metrics."><em>「最小」</em>メトリクスは、メトリクスの登録、削除および更新をサポートします。</span> <span class="merged" id="all.3J1Hhj.spl2" title="原文 : The metrics objects provided by the minimal implementation are no-ops: their values never change.">最小限の実装によって提供されるメトリクス・オブジェクトは、操作なしです: これらの値は決して変わりません。</span> <span class="merged" id="all.3J1Hhj.spl3" title="原文 : The minimal implementation is part of the helidon-metrics-api component.">最小限の実装は、<code>helidon-metrics-api</code>コンポーネントの一部です。</span> </p>

</li>
</ul>
<p><span class="merged" id="all.3fN1dV" title="原文 : Any code compiled with helidon-metrics-api can assume that the runtime path will include the minimal implementation."><code>helidon-metrics-api</code>でコンパイルされたコードは、ランタイム・パスに最小限の実装が含まれることを想定できます。</span></p>

<p><span class="merged" id="all.Ua7ft.spl1" title="原文 : Both implementations support all the operations of the RegistryFactory and the MetricRegistry.">どちらの実装も、<code>RegistryFactory</code>および<code>MetricRegistry</code>のすべての操作をサポートします。</span> <span class="merged" id="all.Ua7ft.spl2" title="原文 : The full implementation provides fully-functional metrics instances (counters, timers, etc.).">完全な実装は、完全に機能するメトリクス・インスタンス(カウンタ、タイマーなど)を提供します。</span> <span class="merged" id="all.Ua7ft.spl3" title="原文 : In the minimal implementations, metrics do not update their values.">最小限の実装では、メトリクスは値を更新しません。</span> </p>

<p><span class="merged" id="all.2sIUpR" title="原文 : For Helidon to use the full implementation, two conditions must hold:">Helidonで完全な実装を使用するには、次の2つの条件を保持する必要があります:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.2V8CfZ" title="原文 : The helidon-metrics component must be on the runtime path."><code>helidon-metrics</code>コンポーネントはランタイム・パス上にある必要があります。</span></p>

</li>
<li>
<p><span class="merged" id="all.1wEZuC.spl1" title="原文 : Metrics must be enabled, using either a builder or configuration.">メトリクスは、ビルダーまたは構成を使用して有効にする必要があります。</span> <span class="merged" id="all.1wEZuC.spl2" title="原文 : (Enabled is the default.)">(デフォルトは有効です。)</span> </p>

</li>
</ul>
<p><span class="merged" id="all.3CujEF" title="原文 : Otherwise, provided that the runtime path includes helidon-metrics-api, Helidon activates the minimal implementation.">それ以外の場合、ランタイム・パスに<code>helidon-metrics-api</code>が含まれていると、Helidonによって最小限の実装がアクティブ化されます。</span></p>

</div>

<h2 id="_understanding_the_two_metrics_service_implementations"><span class="merged" id="all.v3uce" title="原文 : Understanding the Two Metrics Service Implementations">2つのメトリクス・サービス実装の理解</span></h2>
<div class="section">
<p><span class="merged" id="all.2llzuf" title="原文 : Helidon includes two implementations of support for the metrics web service endpoint /metrics (or whatever context value is configured).">Helidonには、メトリクスwebサービス・エンドポイント<code>/metrics</code> (または構成されるコンテキスト値)に対する2つのサポートの実装が含まれます。</span></p>

<p><span class="merged" id="all.U5TOc.spl1" title="原文 : The full-service implementation sends responses which describe the metadata and current values for the metrics registered in metric registries.">フル・サービス実装は、メトリック・レジストリに登録されているメトリクスのメタデータおよび現在の値を記述したレスポンスを送信します。</span> <span class="merged" id="all.U5TOc.spl2" title="原文 : The helidon-metrics component contains this implementation."><code>helidon-metrics</code>コンポーネントには、この実装が含まれます。</span> </p>

<p><span class="merged" id="all.3Pz9j1.spl1" title="原文 : The helidon-metrics-service-api component contains the API for the metrics web service support (the MetricsSupport interface) and also a minimal implementation."><code>helidon-metrics-service-api</code>コンポーネントには、メトリクスwebサービス・サポート(<code>MetricsSupport</code>インタフェース)および最小実装のためのAPIが含まれています。</span> <span class="merged" id="all.3Pz9j1.spl2" title="原文 : This implementation simply responds with 404 and an explanatory message that metrics are disabled.">この実装は、<code>404</code>で応答し、メトリクスが無効であることを示すメッセージです。</span> </p>

<p><span class="merged" id="all.293RXF" title="原文 : Any code compiled with helidon-metrics-service-api can assume that the runtime path will contain the minimal implementation."><code>helidon-metrics-service-api</code>でコンパイルされたコードは、ランタイム・パスに最小限の実装が含まれていると想定できます。</span></p>

<p><span class="merged" id="all.bxE4E" title="原文 : Helidon activates the full implementation if the runtime path includes the full implementation and metrics is configured as enabled; Helidon uses the minimal implementation otherwise.">ランタイム・パスに完全な実装が含まれ、<em>かつ</em>メトリクスが有効として構成されている場合、Helidonは完全な実装をアクティブ化します。それ以外の場合、Helidonは最小限の実装を使用します。</span></p>

</div>

<h2 id="_enabling_and_disabling_metrics"><span class="merged" id="all.4HJAOy" title="原文 : Enabling and Disabling Metrics">メトリクスの有効化および無効化</span></h2>
<div class="section">
<p><span class="merged" id="all.1V0Ivc.spl1" title="原文 : Using configuration, your component can let end users control at runtime whether Helidon should use full-featured metrics.">構成を使用すると、コンポーネントは、Helidonがフル機能のメトリクスを使用するかどうかを実行時に制御できます。</span> <span class="merged" id="all.1V0Ivc.spl2" title="原文 : If an end user sets metrics.enabled to false, then Helidon activates the minimal metrics and metrics service implementations provided they are in the runtime path.">エンド・ユーザーが<code>metrics.enabled</code>を<code>false</code>に設定すると、Helidonは、ランタイム・パスにある場合に、最小限のメトリクスおよびメトリクス・サービス実装をアクティブ化します。</span> </p>

<p><span class="merged" id="all.4OJE0I" title="原文 : Further, users can set component-name.metrics.enabled to false which disables metrics for just that component so long as the component was written to check that setting and act on it accordingly.">さらに、ユーザーは<code>component-name.metrics.enabled</code>を<code>false</code>に設定できます。これは、その設定を確認し、それに基づいて処理するようにコンポーネントが記述されているかぎり、そのコンポーネントのメトリクスのみが無効になります。</span></p>

</div>

<h2 id="_designing_and_writing_metrics_capable_applications_and_components"><span class="merged" id="all.1vymNA" title="原文 : Designing and Writing Metrics-capable Applications and Components">メトリクス対応のアプリケーションおよびコンポーネントの設計と記述</span></h2>
<div class="section">
<p><span class="merged" id="all.kCvEN.spl1" title="原文 : Whoever packages and deploys your application or component can control what code will be on the runtime path and whether metrics is enabled or not.">アプリケーションまたはコンポーネントをパッケージおよびデプロイするユーザーは、ランタイム・パス上のコードおよびメトリクスが有効かどうかを制御できます。</span> <span class="merged" id="all.kCvEN.spl2" title="原文 : As a result, wherever possible, construct your modules which use metrics so that they do not make decisions based on the values of metrics; that is, design them to be metrics-capable, not metrics-dependent.">結果として、可能な場合はメトリクスを使用するモジュールを構築して、メトリクスの値に基づいてディシジョンを行わないようにします。つまり、メトリクス依存でなく、メトリクスに対応するように設計します。</span> <span class="merged" id="all.kCvEN.spl3" title="原文 : Doing so allows your code to operate regardless of whether the full-featured metrics implementation is active at runtime.">これにより、フル機能のメトリクス実装が実行時にアクティブであるかどうかに関係なく、コードの動作が可能になります。</span> </p>


<h3 id="_declaring_dependencies"><span class="merged" id="all.4bs1kZ" title="原文 : Declaring Dependencies">依存関係の宣言</span></h3>
<div class="section">
<ol style="margin-left: 15px;">
<li>
<span class="merged" id="all.4KTKAm" title="原文 : Include this dependency:">次の依存関係を含めます:</span>
<markup
lang="xml"
title="Dependency for Helidon metrics API"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics-api&lt;/artifactId&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.2OfX7Y" title="原文 : This module defines the metrics API: RegistryFactory, MetricRegistry, and the various metrics themselves.">このモジュールはメトリクスAPI: <code>RegistryFactory</code>、<code>MetricRegistry</code>および様々なメトリクス自体を定義します。</span></p>

</li>
<li>
<span class="merged" id="all.3PSSuo" title="原文 : Declare an explicit runtime dependency on the full-featured metrics implementation:">フル機能のメトリクス実装に対する明示的なランタイム依存関係を宣言します:</span>
<markup
lang="xml"
title="Dependency for full metrics and metrics service implementations"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-metrics&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;</markup>

</li>
</ol>
</div>

<h3 id="_writing_the_metrics_capable_code"><span class="merged" id="all.1Rd3t0" title="原文 : Writing the Metrics-capable Code">メトリクス対応コードの記述</span></h3>
<div class="section">
<p><span class="merged" id="all.1PlMdK" title="原文 : The way you write a metrics-capable module depends on whether it is a component (that is, not an application) or an application.">メトリクス対応モジュールを記述する方法は、<em>「コンポーネント」</em> (つまり、アプリケーションでは<em>ない</em>)か<em>「アプリケーション」</em>かによって異なります。</span></p>


<h4 id="_writing_a_non_application_component"><span class="merged" id="all.1GZrfE" title="原文 : Writing a Non-application Component"><em>「非アプリケーション・コンポーネント」</em>の記述</span></h4>
<div class="section">
<p><span class="merged" id="all.BTd73.spl1" title="原文 : Write your non-application component to accept component-specific configuration that includes an optional metrics section which can include an optional enabled setting.">オプションの<code>enabled</code>設定を含むオプションの<code>metrics</code>セクションを含むコンポーネント固有の構成を受け入れるように、<em>「非アプリケーション」</em>コンポーネントを記述します。</span> <span class="merged" id="all.BTd73.spl2" title="原文 : Helidon defaults the value to true.">Helidonのデフォルト値は<code>true</code>です。</span> <span class="merged" id="all.BTd73.spl3" title="原文 : The following example shows one way to accomplish this:">次の例では、これを実現する方法を説明します:</span> </p>

<markup
lang="java"
title="Example code to support disabling metrics usage in a component"
>import io.helidon.config.Config;
import io.helidon.metrics.api.ComponentMetricsSettings;
import io.helidon.metrics.api.MetricsSettings;
import io.helidon.metrics.api.RegistryFactory;

import org.eclipse.microprofile.metrics.MetricRegistry;

public class UtilComponent {

    private final MetricRegistry metricRegistry; <span class="conum" data-value="1" />

    public static class Builder implements io.helidon.common.Builder&lt;UtilComponent&gt; { <span class="conum" data-value="2" />
        private ComponentMetricsSettings.Builder componentMetricsSettingsBuilder = ComponentMetricsSettings.builder();

        public Builder componentMetricsSettings(ComponentMetricsSettings.Builder componentMetricsSettingsBuilder) { <span class="conum" data-value="3" />
            this.componentMetricsSettingsBuilder = componentMetricsSettingsBuilder;
            return this;
        }

        public Builder config(Config componentConfig) { <span class="conum" data-value="4" />
            componentConfig
                .get(ComponentMetricsSettings.Builder.METRICS_CONFIG_KEY)
                .as(ComponentMetricsSettings::create)
                .ifPresent(this::componentMetricsSettings);
            return this;
        }

        public UtilComponent build() {
            return new UtilComponent(this);
        }

        ...
    }

    private UtilComponent(Builder builder) {
        ...
        metricRegistry = RegistryFactory
                .getInstance(builder.componentMetricsSettingsBuilder.build())
                .getRegistry(MetricRegistry.Type.VENDOR); <span class="conum" data-value="5" />
    }

    MetricRegistry metricRegistry() { <span class="conum" data-value="6" />
        return metricRegistry;
    }
}</markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.2kpJ2v" title="原文 : Other code in the component uses this metric registry for registering, looking up, and removing metrics.">コンポーネントの他のコードでは、このメトリック・レジストリを使用してメトリクスを登録、参照および削除します。</span></li>
<li data-value="2"><span class="merged" id="all.2xGXRI" title="原文 : Applications which use instances of MyComponent use this Builder to set up and create those instances."><code>MyComponent</code>のインスタンスを使用するアプリケーションでは、この<code>Builder</code>を使用してこれらのインスタンスを設定および作成します。</span></li>
<li data-value="3"><span class="merged" id="all.2GzZQ7" title="原文 : Applications which layer on your component invoke this method to set up the component-level metrics behavior they want your component to use.">コンポーネント上のどのレイヤーで、このメソッドを呼び出して、コンポーネントで使用するコンポーネント・レベルのメトリクス動作を設定します。</span></li>
<li data-value="4"><span class="merged" id="all.Ila9H" title="原文 : If an application supports configuration, it passes the util config to this method.">アプリケーションが構成をサポートしている場合は、util構成をこのメソッドに渡します。</span></li>
<li data-value="5"><span class="merged" id="all.gQuJA" title="原文 : The constructor for your component obtains the MetricRegistry which the rest of your component will use.">コンポーネントのコンストラクタは、残りのコンポーネントが使用する<code>MetricRegistry</code>を取得します。</span></li>
<li data-value="6"><span class="merged" id="all.4cAo8v" title="原文 : Provides easy access to the MetricRegistry which the component&rsquo;s metrics code should use.">コンポーネントのメトリクス・コードを使用する<code>MetricRegistry</code>に簡単にアクセスできます。</span></li>
</ul>
<p><span class="merged" id="all.kIe9N" title="原文 : Helidon returns either a full-featured RegistryFactory or a minimal one, depending on:">Helidonは、次の条件に応じて、フル機能の<code>RegistryFactory</code>または最小値のいずれかを返します:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1DfrPU" title="原文 : whether the full-featured metrics implementation is on the runtime path,">フル機能のメトリクス実装が実行時のパスにあるかどうか、</span></p>

</li>
<li>
<p><span class="merged" id="all.3zxu80" title="原文 : whether metrics overall is enabled or disabled, and">メトリクス全体が有効か無効か、および</span></p>

</li>
<li>
<p><span class="merged" id="all.4dSJzA" title="原文 : whether the component metrics settings requests enabled or disabled metrics.">コンポーネント・メトリクス設定が有効化または無効化のメトリクスをリクエストするかどうか。</span></p>

</li>
</ul>
</div>

<h4 id="_writing_a_helidon_mp_application"><span class="merged" id="all.1EUHu9" title="原文 : Writing a Helidon MP Application">Helidon MPアプリケーションの記述</span></h4>
<div class="section">
<p><span class="merged" id="all.21tdYi" title="原文 : When your MP application code uses @Inject for either a RegistryFactory or a MetricRegistry, Helidon injects either the full-featured instance or the minimal instance according to whether the runtime path includes the full implementation and, if so, whether metrics is enabled.">MPアプリケーション・コードで<code>RegistryFactory</code>または<code>MetricRegistry</code>に<code>@Inject</code>を使用すると、Helidonは、ランタイム・パスに完全な実装が含まれているかどうかに応じて、フル機能のインスタンスまたは最小インスタンスのいずれかをインジェクトし、その場合はメトリクスが有効かどうかに応じてインジェクトします。</span></p>

<p><span class="merged" id="all.tYnGL" title="原文 : By choosing and injecting the appropriate implementation, Helidon allows you to write your code without concern for which implementation is available at runtime.">Helidonでは、適切な実装を選択してインジェクトすることにより、実行時にどの実装が使用可能かに関係なく、コードを記述できます。</span></p>

</div>

<h4 id="_packaging_a_metrics_capable_helidon_mp_application"><span class="merged" id="all.4Th7Ow" title="原文 : Packaging a Metrics-capable Helidon MP Application">メトリクス対応のHelidon MPのパッケージング<em>「アプリケーション」</em></span></h4>
<div class="section">
<p><span class="merged" id="all.suMjd.spl1" title="原文 : The Helidon MP metrics implementation depends on the metrics and metrics service APIs as well as helidon-metrics which contains the full implementation of each.">Helidon MPメトリクスの実装は、メトリクスとメトリクス・サービスAPI、およびそれぞれのすべての実装を含む<code>helidon-metrics</code>によって異なります。</span> <span class="merged" id="all.suMjd.spl2" title="原文 : Therefore, by default, Helidon MP applications have full-featured metrics and endpoint support.">したがって、デフォルトでは、Helidon MPアプリケーションにはフル機能のメトリクスとエンドポイントのサポートがあります。</span> </p>

<p><span class="merged" id="all.2HqhxC.spl1" title="原文 : Application code can @Inject the RegistryFactory and MetricRegistry instances.">アプリケーション・コードは、<code>RegistryFactory</code>および<code>MetricRegistry</code>インスタンスを<code>@Inject</code>できます。</span> <span class="merged" id="all.2HqhxC.spl2" title="原文 : Helidon MP itself uses metrics settings in the configuration to make the correct RegistryFactory and MetricRegistry instances available at injection sites.">Helidon MP自体は、構成内のメトリクス設定を使用して、適切な<code>RegistryFactory</code>および<code>MetricRegistry</code>インスタンスをインジェクション・サイトで使用できるようにします。</span> </p>

<p><span class="merged" id="all.3qeWUq" title="原文 : Helidon&rsquo;s MicroProfile metrics component helidon-microprofile-metrics has its own runtime dependency on the minimal implementation, so that implementation, at least, is available at runtime.">HelidonのMicroProfileメトリクス・コンポーネント<code>helidon-microprofile-metrics</code>には、最小実装に対する独自のランタイム依存関係があるため、少なくとも実装を実行時に使用できます。</span></p>

<p><span class="merged" id="all.4dfWMm.spl1" title="原文 : By default, Helidon MP applications use the full implementation, because Helidon&rsquo;s MP metrics depends also on the full metrics implementation.">デフォルトでは、HelidonのMPメトリクスも完全なメトリクス実装に依存するため、Helidon MPアプリケーションは完全な実装を使用します。</span> <span class="merged" id="all.4dfWMm.spl2" title="原文 : That said, a developer of a Helidon MP app can explicitly exclude the dependency on the full implementation:">つまり、Helidon MPアプリケーションの開発者は、完全な実装に対する依存関係を明示的に除外<em>「できます」</em>:</span> </p>

<markup
lang="xml"
title="Explicit exclusion of <code>helidon-metrics</code>"
>&lt;dependency&gt;
    &lt;groupId&gt;io.helidon.microprofile.bundles&lt;/groupId&gt;
    &lt;artifactId&gt;helidon-microprofile&lt;/artifactId&gt;
    &lt;exclusions&gt;
        &lt;exclusion&gt;
            &lt;groupId&gt;io.helidon.metrics&lt;/groupId&gt;
            &lt;artifactId&gt;helidon-metrics&lt;/artifactId&gt;
        &lt;/exclusion&gt;
    &lt;/exclusions&gt;
&lt;/dependency&gt;</markup>

<p><span class="merged" id="all.1PUmBV" title="原文 : In the resulting Helidon MP application, Helidon will use the minimal metrics and metrics support implementations.">結果のHelidon MPアプリケーションでは、Helidonは最小限のメトリクスおよびメトリクスのサポート実装を使用します。</span></p>

</div>

<h4 id="_an_example_docker_images"><span class="merged" id="all.2DgsGp" title="原文 : An Example: Docker Images">例: Dockerイメージ</span></h4>
<div class="section">
<p><span class="merged" id="all.22u27m" title="原文 : Here is an example showing how useful metrics-capable code can be.">次に、有用なメトリクス対応コードの例を示します。</span></p>

<p><span class="merged" id="all.2f5Ufz.spl1" title="原文 : You (or others) could assemble a Docker image with your metrics-capable app as its top layer or your metrics-capable component in a middle layer, built on a lower layer containing several Helidon modules including the full metrics implementation.">ユーザー(またはその他)は、メトリクス対応アプリを最上位レイヤーとして、またはメトリクス対応のコンポーネントを中央レイヤーに組み立てることができ、完全なメトリクス実装を含む複数のHelidonモジュールを含む下位レイヤー上に構築されます。</span> <span class="merged" id="all.2f5Ufz.spl2" title="原文 : When that Docker image runs, your app will run with full-featured metrics support.">このDockerイメージが実行されると、アプリケーションはフル機能のメトリクス・サポートで実行されます。</span> </p>

<p><span class="merged" id="all.NmZ16.spl1" title="原文 : Separately, someone could build a similar Docker image which does not include the Helidon metrics implementation.">別々に、Helidonメトリクス実装を含ま<em>「ない」</em>類似のDockerイメージを構築できます。</span> <span class="merged" id="all.NmZ16.spl2" title="原文 : In this Docker image, your app or component will run successfully but will not incur the overhead of actually updating the metrics it uses.">このDockerイメージでは、アプリケーションまたはコンポーネントは正常に実行されますが、実際に使用されるメトリクスを更新するオーバーヘッドは発生しません。</span> </p>

<p><span class="merged" id="all.MkAaP" title="原文 : Users can create different Docker images, some with full metrics support and some without, which all use a single version of your metrics-capable app or component which runs properly in either environment without change.">ユーザーは、様々なDockerイメージを作成できます。一部の完全なメトリクス・サポートとないものがあり、これらはすべて、変更せずにいずれかの環境で適切に動作するメトリクス対応のアプリケーションまたはコンポーネントの単一バージョンを使用します。</span></p>

</div>
</div>
</div>

<h2 id="_advantages_of_writing_metrics_capable_modules"><span class="merged" id="all.3VAwd" title="原文 : Advantages of Writing Metrics-capable Modules">メトリクス対応モジュールの記述の利点</span></h2>
<div class="section">
<p><span class="merged" id="all.2RNTi7" title="原文 : By writing a metrics-capable app or component, you give packagers and deployers of your code the flexibility to include or exclude the full metrics implementation at runtime as they see fit.">メトリクス対応のアプリケーションまたはコンポーネントを記述することで、コードのパッケージ作成者およびデプロイヤに、適合している場合に実行時にメトリクス全体の実装を含めるか除外する柔軟性を提供します。</span></p>

<p><span class="merged" id="all.RPtWX" title="原文 : Because your one module works correctly in either environment:">1つのモジュールはどちらの環境でも正しく動作するため:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.1XXV1J" title="原文 : The consumers of your app benefit by not needing to understand and choose between two different implementations of your module, or having to add both your main module and an optional add-on which adds metrics support to your module.">アプリの消費者は、モジュールの2つの異なる実装を把握して選択する必要がなくなり、メイン・モジュールとオプションのアドオンの両方を追加して、メトリクスのサポートをモジュールに追加する必要がなくなります。</span></p>

</li>
<li>
<p><span class="merged" id="all.1Xxgaj" title="原文 : You benefit by writing and maintaining a single module, not two: one that is metrics-independent and one that is metrics-dependent.">2つではなく1つのモジュールを記述して維持することでメリットが得られます: メトリクスに依存せず、メトリクスに依存しないもの。</span></p>

</li>
</ul>
</div>
</doc-view>
