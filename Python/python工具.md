

> 基于[\[Python\] 虚拟环境venv、pipenv、poetry、conda、uv如何选择？1分钟搞懂 - 知乎](https://zhuanlan.zhihu.com/p/663735038?utm_id=0#CTZ_BASIS)
的梳理






- virtualenv

    2007 年诞生，由 Ian Bicking 开发，最初目标是解决 Python 2.x 与 3.x 的兼容性问题，以及项目间的依赖隔离

    > virtualenv : 太老，除非你还在使用python 2，否则不推荐。virtualenv : 太老，除非你还在使用python 2，否则不推荐。


- pipx

    每个工具被安装到独立的虚拟环境中，通过符号链接暴露到全局 PATH，实现“隔离安装、全局使用”的效果。

    [python包管理利器-pipx和poerty详解 - 枫奇丶宛南 - 博客园](https://www.cnblogs.com/aifengqi/p/15394389.html)



- venv 

     python自带的虚拟环境管理

    Python 3.3 引入内置模块 `venv`，借鉴了 virtualenv 的设计，但仅支持 Python 3，功能较为基础（如不支持查看环境列表或切换解释器版本）


- pipenv

    > requests库作者Kenneth Reitz大神的作品。但pipenv并不稳定，例如，如果你运行pip install ...两次，结果可能不一样，pipenv曾承诺解决这个问题，但实际上，它只是多次尝试运行pip install <单个包>，直到结果看起来差不多符合规范。显然，这样的方式更慢，但最终问题依然存在。

- anaconda / conda 

    > - anaconda实在过于臃肿，它的安装包里包括了众多科学计算会用到的packages，安装后动辄5-6个G。
    > - anaconda有个不包含packages的版本，叫miniconda，但miniconda仍然存在安装依赖库过于激进的问题，安装同样的packages，conda总会比别的包管理器安装更多的“依赖包”，即便有的“依赖包”并不是必须，这会导致你的项目出现不必要的膨胀。
    > - 同时，conda的packages列表“conda list”还存在和“pip list”不一致的问题。

- poetry 

    >  在uv出现前最好用的管理工具，但已经是过去式。

    > - poetry使用pyproject.toml 和 poetry.lock文件来管理依赖，类似于JavaScript/Node.js的Npm和Rust的Cargo，这俩都是非常成熟好用的依赖管理方案。
    > - poetry本身并不具有管理Python解释器的功能，推荐和pyenv/pyenv-win使用，可以轻松下载和设置不同版本的Python解释器。
    > - poetry的缺点可能是较为复杂，上手困难。由于poetry严格的依赖管理策略，你可能会在安装依赖包时遇到更多的问题。
    > - 在国内，poetry还有另一个缺点，无法设置全局镜像源，只可针对单个项目设置镜像源。

    [poetry 入门完全指南_poetry使用-CSDN博客](https://blog.csdn.net/weixin_42871919/article/details/137125544)




- uv：唯一的真神。

    - uv使用rust构建，uv的维护者astral还有另一个大名鼎鼎的python代码格式化工具ruff，在使用ruff和uv时，你能明显感觉到和其它基于python的工具的差距，指哪打哪，非常爽快。
    - uv和poetry一样使用pyproject.toml和lock文件管理依赖，很现代，用过的都说好。
    - uv还同时管理python解释器，也就是集成了pyenv的功能，可以方便地下载和管理解释器。在python解释器小版本更新时（例如3.12.0→3.12.1），uv也会自动更新，以后再也不用苦哈哈的去python官网找解释器了。
    - 将uv生成的项目拷贝到没有python环境的电脑上，只需使用命令“uv sync”，uv会自动安装python解释器，并接着安装pip依赖，如果使用“uv run”，uv还会在全部安装妥当后，自动开始运行脚本。
    - uv甚至还集成了pipx安装python全局工具的功能，例如ruff、isort、mypy、pyright这类全局工具，可以使用“uv tool”安装、升级和管理。
    - 即便你是一个纯粹的“pip”命令爱好者，uv也可以满足你。uv提供了“uv pip”系列命令，可以同时具备rust的爽快和pip的学院派感觉，堪称古典与现代的结合。
    - 在最新的pycharm版本（2024.3.2或以上）里也添加了uv的支持，使用pycharm和uv管理项目甚至不需要写命令行。
    - uv的缺点可能是还比较新，社区相较pip、conda之类的来说还不成熟，遇到问题可能不容易找到答案。













