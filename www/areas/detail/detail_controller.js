/**
 * Created by EvaLi on 2016/11/26.
 */
angular.module('detail.controller', [])
  .controller('DetailCtrl', ["$scope",function ($scope) {

    //添加模型
    $scope.text = {
      txt:""
    };

    $scope.todos = [
      /*{id:1,text:"吃饭",completed:false},
      {id:4,text:"睡觉",completed:false},*/
      /*{id:3,text:"打豆豆",completed:true}*/
    ];
//当页面打开，读取本地存储
    $scope.getTodos = localStorage.getItem("mytodos");
    //转成数组
    $scope.todos = JSON.parse($scope.getTodos);
    console.log($scope.todos);

    //设置存储本地数据函数
    $scope.save = function () {
      //转成字符串
      $scope.saveTodos = JSON.stringify($scope.todos);
      console.log($scope.saveTodos);
      localStorage.setItem("mytodos", $scope.saveTodos);
    };




    //搜索框输入任务点击提交添加一个清单
    $scope.add = function () {
      if(!$scope.text.txt){
        return
      }else{
        //文本框输入，添加一个任务
        $scope.todos.push({
          id:Math.random(),
          text:$scope.text.txt,
          completed:false
        });
        //清空文本框
        $scope.text.txt = "";
        //调用保存数据到本地存储函数
        $scope.save()
      }
    };

    //删除一个清单
    $scope.remove = function (thisId) {
        for(var i = 0; i < $scope.todos.length; i++){
          if(thisId===$scope.todos[i].id){
            $scope.todos.splice(i,1)
          }
        }
      $scope.save()
    };

    //清除全部已完成
    $scope.removeAll = function () {
      var todoLi = [];
      for(var i = 0;i < $scope.todos.length;i++){
        if(!$scope.todos[i].completed){
          todoLi.push($scope.todos[i])
        }
      }
      $scope.todos = todoLi;
      $scope.save()
    };

    //全选、全不选
    var now = true;
    $scope.checkAll = function () {
      for(var i = 0;i < $scope.todos.length;i++){
          $scope.todos[i].completed = now
      }
      now = !now
    }
  }]);
