 ### git用法

 |代码|作用| 
 |---|:---:| 
 |$git init|初始化| 
 |$git add .|添加文件到暂存区|
 |$git commit -m "提交命令"|提交|
 |$git remote add origin 你github上的复制链接|连接|
 |$git remote remove origin|git断开远程链接|
 |$git push -u  origin master|添加文件到项目|
 |$git clone -b 分支名称|拉去指定分支代码|
 |$git branch -a|查看所有分支|
 |$git branch|查看当前使用分支|
 |$git checkout 分支名|切换分支，注：切换分支之前最好push完|
 |$git pull|拉取没有分支|
 |$git push origin --delete 分支名|删除远程分支|
 |$git branch -d 分支名|删除本地分支|
 |$git reset --hard HEAD^|develop上要拉取四个点，但之前commit一个点，拉不下来，撤销commit操作|
 |$git merge 分支名|合并另一分支的所有|
 |$git cherry-pick <commitHash>|将指定的提交（commit）应用于其他分支|
 |$git cherry-pick A^..B|转移提交A---B|
 |$git stash|主要用于在开发中将不完整的修改进行缓存|
 |$git stash list|查看stash列表|
 |$git stash pop|弹出最新|
 |$git stash drop #stashversion|删除stash列表中的指定版本|
 |$git stash save "xxx"|给stash添加注释|
 |$git stash clear|全清|
 |$git stash apply stash@{0}|添加指定结点|

  

 ------------
   ### 多人协作
  ```
  git checkout dev
  git pull
  git checkout feat/xxx
  git rebase -i dev---->解决冲突--->git rebase --continue
  git checkout dev
  git merge feat/xxx
  git push
  ```
 ----------
 ### tig用法（用来查看commit）
 
 ##### 1. `tig`+`enter`进入 tig 模式
 
 ----------
 ### git stash pop后有冲突如何撤销
 git reset --hard 即可撤销git stash pop操作，而且stash暂存记录不会删
 git stash show 看得到
 ----------
### 相关链接
[git rebase 和 git merge 的区别](https://www.jianshu.com/p/4079284dd970?u_atoken=26add996-d97e-4e6d-aedb-b2d4344f362e&u_asession=01jKR8TweGslFoZ5rPMpLm0jj-MeCtr5Gw5uVgff8k6rbt6nxB_LQ2l6Au5ERQdtO2X0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K8s8HahI665WI14KuoF22ipPpcarp92QKzyJKyYjREPlmBkFo3NEHBv0PZUm6pbxQU&u_asig=05OmlONVrTf5sD-EHkaBLATD-lQyn3NM_zsCwy0HGbeOjxA-ZpV9-QNk_4HiGC8c06Kf8hoReEHf7J-9n1Tbln7X-o51wsvn3SaZ5V4OnTkvvxVbRxADyW2Jf0BOnwdu7a09GgBZnKvms13rmCAqchTDrCkKuO5-v3U0hD7CQJHxH9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzUZzPnMD45z9d-43RtNiOjnKiczyrp1dP4Fy5X5KxZEgWPRPQyB_SKrj-61LB_f61u3h9VXwMyh6PgyDIVSG1W-uHkX0eyDbnCs2JawIIRm_9CZdKG5Jxn3tSLIwaLj6FCjx7QBjm0seluuX8fD4K8Tocsb9pUnCVNZ7Tk8a6IFnmWspDxyAEEo4kbsryBKb9Q&u_aref=UIVLKMhCH3astiZSGIk3F1iLYWI%3D)
##### when you encounter the following problem
- 1.fatal: unable to connect to github.com
  ```
  vim ~/.gitconfig //then delete all [instead of]
  ```
