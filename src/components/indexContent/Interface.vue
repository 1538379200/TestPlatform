<template>
  <div>
    <n-h1>
      <Icon size="30" color="#18A058">
        <ClipboardTextLtr20Filled/>
      </Icon>
      接口测试模块
    </n-h1>
    <n-hr></n-hr>
    <n-h2 id="接口分类">
      <Icon size="20" color="#18A058">
        <DocumentText/>
      </Icon>
      接口分类
    </n-h2>
    <n-image width="1000" :src="Inter1"></n-image>
    <n-hr></n-hr>
    <n-h2 id="接口介绍">
      <Icon size="20" color="#18A058">
        <DocumentText/>
      </Icon>
      什么是接口测试
    </n-h2>
    <n-text>
      我们一般来说，测试接口，就是指测试接口的功能，性能和稳定性测试，当然可能还有安全性测试。这个入门系列会让你掌握接口的功能测试。一般，来说我们听说到的接口基本上都是指HTTP或者HTTPS协议的接口测试，也就是一些web服务请求。一个软件项目中，有很多接口，少的有几十个，多的有几百上千个接口。这个时候，我们没有软件界面，没有具体的测试场景，只有一个接口描述文档。我们需要把接口这样抽象的东西，通过软件测试的理论和方法去测试接口，找出接口的功能和安全性的缺陷。接口有内部接口和外部接口。内部接口就是开发人员自己开发的接口。外部接口，好比网站调用微信支付和支付宝支付接口。还有一些模块与模块之间的接口。学习过Java或者用过selenium的人，应该对接口有了解。你的自动化脚本调用了很多selenium的接口。
    </n-text>
    <SvgIcons name="interSvg1" style="float: right;width: 40rem;height: 40rem"></SvgIcons>
    <n-hr></n-hr>
    <n-h2 id="getpost">
      <Icon size="20" color="#18A058">
        <DocumentText/>
      </Icon>
      GET和POST区别
    </n-h2>
    <n-h3>GET和POST区别</n-h3>
    <n-text>
      1）.方式 <br>
      方式指的是参数的传入方式，GET方法一般是指获取服务器上的数据，参数直接跟着URL后边，直接可以放到浏览器地址栏里，例如登录就是采用GET方法。而POST方法是指客户端给服务器上提交表单数据，所以POST是通过表单提交的，例如你网页上的调查问卷和答题就是采用POST方法。<br><br>
      2）.大小 <br>
      上面已经知道GET是直接在浏览器地址栏输入，由于浏览器有限制，一般整个URL的长度可以很长，但是不能超过2049KB的大小限制，而这个POST就没有大小限制。<br><br>
      3）.安全性 <br>
      由于GET的参数是在浏览器地址栏直接拼接，暴露在互联网中，肯定不安全。POST是通过表单数据提交，相对比GET方法更安全。<br>
    </n-text>
    <n-hr></n-hr>
    <n-h2 id="为什么做">
      <Icon size="20" color="#18A058">
        <DocumentText/>
      </Icon>
      为什么要做接口测试？
    </n-h2>
    <n-h3>为什么需要进行接口测试？</n-h3>
    <n-text>
      1.越底层发现bug，它的修复成本是越低的。<br>
      2.前端随便变，接口测好了，后端不用变，前后端是两拨人开发的。<br>
      3.检查系统的安全性、稳定性，前端传参不可信，比如京东购物，前端价格不可能传入-1元，但是通过接口可以传入-1元。<br>
      4.如今的系统复杂度不断上升，传统的测试方法成本急剧增加且测试效率大幅下降，接口测试可以提供这种情况下的解决方案。<br>
      5. 接口测试相对容易实现自动化持续集成，且相对UI自动化也比较稳定，可以减少人工回归测试人力成本与时间，缩短测试周期，支持后端快速发版需求。接口持续集成是为什么能低成本高收益的根源。<br>
      6. 现在很多系统前后端架构是分离的，从安全层面来说：<br>
      (1)只依赖前端进行限制已经完全不能满足系统的安全要求（绕过前面实在太容易）， 需要后端同样进行控制，在这种情况下就需要从接口层面进行验证。<br>
      (2)前后端传输、日志打印等信息是否加密传输也是需要验证的，特别是涉及到用户的隐私信息，如身份证，银行卡等。<br>
    </n-text>
    <n-h3>接口测试原理</n-h3>
    <n-text>
      通过测试程序模拟客户端向服务器发送请求报文，服务器接收请求报文后对相应的报文做出处理然后再把应答报文发送给客户端，客户端接收应答报文这一过程（request（请求）→response（响应））
    </n-text>
    <n-hr></n-hr>
    <n-h2 id="如何做">
      <Icon size="20" color="#18A058">
        <DocumentText/>
      </Icon>
      如何进行接口测试
    </n-h2>
    <n-h3>基本介绍</n-h3>
    <n-text>
      --由于我们项目前后端调用主要是基于http协议的接口，所以测试接口时主要是通过工具或代码模拟http请求的发送与接收。工具有很多如：postman、jmeter、soupUI、java+httpclient、robotframework+httplibrary等。<br>
      --也可以用接口自动化来实现，就是用代码实现，框架和UI自动化差不多，发送请求用断言来判断。所以我们下面整理了一下使用Jmeter工具进行http接口测试。
    </n-text>
    <n-h3>1、开发接口测试案例的整体方案</n-h3>
    <n-text>
      第一步： 分析出测试需求，并拿到开发提供的接口说明文档；<br>
      第二步： 从接口说明文档中整理出接口测试案例，里面要包括详细的入参和出参数据以及明确的格式和检查点；<br>
      第三步： 和开发一起对接口测试案例进行评审；<br>
      第四步： 结合开发库，准备接口测试案例中的入参和出参数据，并整理成csv格式的文件；<br>
      第五步： 结合接口测试案例文档和csv格式的数据文档，做接口测试案例的自动化案例开发。<br>
    </n-text>
    <SvgIcons name="interSvg2" style="float: right;width: 40rem;height: 40rem"></SvgIcons>
    <n-h3>2、接口自动化适用场景</n-h3>
    <n-text>
      目前设计的自动化接口测试案例有两个运行场景：<br><br>
      （1）测试前置、开发自测：一个新的自动化接口测试案例开发完成后，直接发给接口对应的开发，安排在开发本地环境执行，一旦开发确认完成接口开发，就开始执行接口测试案例，基本上可以实时拿到测试结果，方便开发快速做出判断。（开发本地运行的方式就是打开JMeter工具，导入JMX文件，开始执行可。）<br>
      （2）回归测试：开发本地测试通过后，或整个需求手工测试通过后，把自动化的接口测试案例做分类整理，挑选出需要纳入到回归测试中的案例，在持续集成环境重新准备测试数据，并把案例纳入到持续集成的job中来，这些用于回归的接口测试案例需要配置到持续集成平台自动运行。<br>
    </n-text>
    <n-h3>3、接口测试环境准备</n-h3>
    <n-text>
      Jmeter <br>
      jdk <br>
    </n-text>
    <n-h3>4、Jmeter进行测试</n-h3>
    <n-text>
      1、添加线程组：在“测试计划”上点击鼠标右键-->添加-->threads(Users)-->线程组，添加测试场景设置组件，接口测试中一般设置为1个“线程数”，根据测试数据的个数设定“循环次数”。 <br>
      2、添加“HTTP Cookie管理器” <br>
      3、添加“Http请求默认值”组件，当被测系统有唯一的访问域名和端口时，这个组件很好用 <br>
      4、在“HTTP 请求默认值”组件配置页面，填写被测系统的域名和端口，http请求的实现包版本以及具体协议类型，线程组里的所有“HTTP Sampler”可默认使用此设置。 <br>
      5、在“线程组”里添加“HTTP 请求”的Sampler <br>
      6、在HTTP请求设置页面，录入被测接口的详细信息，包括请求路径，对应的请求方法，以及随请求一起发送的参数列表 <br>
      7、设置检查点：在被测接口对应的“HTTP 请求”上，添加“响应断言” <br>
      8、在设置页面上添加对相应结果的正则表达式存在性判断即可 <br>
      9、添加监听器：方便查看运行后的结果 <br>
    </n-text>
    <n-h3>接口测试持续集成</n-h3>
    <n-text>
      对接口测试而言，持续集成自动化是核心内容，通过持自动化的手段我们才能做到低成本高收益。目前我们已经实现了接口自动化，主要应用于回归阶段，后续还需要加强自动化的程度，包括但不限于下面的内容：<br>
      a) 流程方面：在回归阶段加强接口异常场景的覆盖度，并逐步向系统测试，冒烟测试阶段延伸，最终达到全流程自动化。<br>
      b) 结果展示：更加丰富的结果展示、趋势分析，质量统计和分析等 <br>
      c) 问题定位：报错信息、日志更精准，方便问题复现与定位。 <br>
      d) 结果校验：加强自动化校验能力，如数据库信息校验。 <br>
      e) 代码覆盖率：不断尝试由目前的黑盒向白盒下探，提高代码覆盖率。 <br>
      f) 性能需求：完善性能测试体系，通过自动化的手段监控接口性能指标是否正常。 <br>
    </n-text>
    <SvgIcons name="interSvg3" style="float: right;width: 40rem;height: 40rem"></SvgIcons>
    <n-h3>接口测试质量评估标准</n-h3>
    <n-text>
      a) 业务功能覆盖是否完整 <br><br>
      b) 业务规则覆盖是否完整 <br><br>
      c) 参数验证是否达到要求（边界、业务规则） <br><br>
      d) 接口异常场景覆盖是否完整 <br><br>
      e) 接口覆盖率是否达到要求 <br><br>
      f) 代码覆盖率是否达到要求 <br><br>
      g) 性能指标是否满足要求 <br><br>
      h) 安全指标是否满足要求 <br><br>
    </n-text>
  </div>
</template>

<script setup>
import {NH1, NH2, NHr, NText, NH3, NImage} from 'naive-ui'
import {Icon} from '@vicons/utils'
import {ClipboardTextLtr20Filled} from '@vicons/fluent'
import Inter1 from '../../icons/inter1.png'
import SvgIcons from "../SvgIcons.vue";
import {DocumentText} from '@vicons/ionicons5'

const inter1 = Inter1
</script>

<style scoped>

</style>