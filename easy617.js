$(function(){
    /**
     *
     * 简单说来就是将两个二叉树相加
     * Definition for a binary tree node.
     * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
     */
    /**
     * @param {TreeNode} t1
     * @param {TreeNode} t2
     * @return {TreeNode}
     */
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    var mergeTrees = function(t1, t2) {
        var root = new TreeNode(null);
        if (t1 && t2) {
            root.val = (t1.val) + (t2.val);
            root.left = mergeTrees(t1.left, t2.left);
            root.right = mergeTrees(t1.right, t2.right);
        } else if (t1) {
            root = t1
        } else if (t2){
            root = t2
        } else {
            root=null;
        }
        return root;
    };
    $(".easy617").text("easy617:  "+mergeTrees([1,3,2,5],[2,1,3,null,4,null,7]));
})