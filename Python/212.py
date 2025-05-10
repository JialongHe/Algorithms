class Solution(object):
    def dfs(self, board, i, j, path, words):
        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]):
            return
        path += board[i][j]
        if path in words:
            words.remove(path)
        if not any(word.startswith(path) for word in words):
            return
        tmp, board[i][j] = board[i][j], '#'
        self.dfs(board, i+1, j, path, words)
        self.dfs(board, i-1, j, path, words)
        self.dfs(board, i, j+1, path, words)
        self.dfs(board, i, j-1, path, words)
        board[i][j] = tmp

    def findWords(self, board, words):
        """
        :type board: List[List[str]]
        :type words: List[str]
        :rtype: List[str]
        """
        for i in range(len(board)):
            for j in range(len(board[0])):
                self.dfs(board, i, j, '', words)
        return list(set(words) - set(words))