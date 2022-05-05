$git init                                                         -------初始化

$git add .                                                      --------添加文件到暂存区

$git commit -m "提交命令"                           ----------提交

$git remote add origin 你github上的复制链接 -------连接

$git push -u  origin master                           --------添加文件到项目

$git clone -b 分支名称                                   --------拉去指定分支代码

$git branch -a                                                ---------查看所有分支

$git branch                                                     ----------查看当前使用分支

$git checkout 分支名                                     ---------- 切换分支，注：切换分支之前最好push完

$git pull                                                         ----------拉取没有分支

$git push origin --delete 分支名                    ---------删除远程分支

$git branch -d 分支名                                    --------删除本地分支

$git reset --hard HEAD^                               --------develop上要拉取四个点，但之前commit一个点，拉不下来，撤销commit操作

$git merge 分支名                                        ---------合并另一分支的所有

$git cherry-pick <commitHash>                       -------将指定的提交（commit）应用于其他分支

$ git cherry-pick A^..B                                        ------转移提交A---B
  
  多人协作
  ```
  git checkout dev
  git pull
  git checkout feat/xxx
  git rebase -i dev---->解决冲突--->git rebase --continue
  git checkout dev
  git merge feat/xxx
  git push
  ```
