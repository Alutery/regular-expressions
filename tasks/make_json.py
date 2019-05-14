from myjson import *


def ChainAcceptance():
    taskType = 'ChainAcceptance'
    n = 5
    graphs = [
  '''digraph G { 
    size="8,5";
    layout="circo";
    node [shape = doublecircle, color = red]; A;
    node [shape = circle, color = black];
    A -> A [ label = " a, b" ];
    B -> A [ label = "a, b" ];
    C -> B [ label = "b" ];
    C -> A [ color = white ];
    C -> C [ label = " a" ];}''',
  '''digraph G { 
      layout="circo";
      rankdir=LR;
      size="8,5";
      node [shape = circle, color = red]; A;
      node [shape = doublecircle, color = black]; E;
      node [shape = circle, color = black];
      A -> C [ label = "c" ];
      A -> B [ label = "b " ];
      B -> B [ label = " b" ];
      B -> C [ label = "c" ];
      C -> D [ label = "b" ];
      D -> E [ label = "a" ];
      D -> F [ label = "b" ];
      F -> E [ label = "a " ];
      F -> F [ label = " b" ];
    }''',
  '''digraph G { 
      rankdir=LR;
      size="8,5";
      node [color = red, shape = circle]; A;
      node [shape = doublecircle, color = black]; E F D C;
      node [shape = circle, color = black];
      A -> C [ label = "b" ];
      A -> B [ label = "a" ];
      B -> D [ label = "b" ];
      D -> F [ label = "c" ];
      C -> E [ label = "a" ];
      C -> F [ label = "c" ];
      D -> E [ label = "a" ];
      F -> E [ label = "a" ];
      F -> F [ label = "c" ];
    }''',
  '''digraph G { 
      rankdir=LR;
      size="8,5";
      node [color = red, shape = doublecircle]; A;
      node [shape = doublecircle, color = black]; G;
      node [shape = circle, color = black];
      A -> B [ label = "b" ];
      B -> C [ label = "b" ];
      C -> D [ label = "d" ];
      G -> B [ label = "b" ];
      D -> F [ label = "d" ];
      D -> E [ label = "a" ];
      F -> E [ label = "a" ];
      F -> F [ label = "d" ];
      E -> G [ label = "a" ];
    }''',
  '''digraph G { 
      rankdir=LR;
      size="8,5";
      node [color = red, shape = doublecircle]; A;
      node [shape = doublecircle, color = black]; C B F E D;
      node [shape = circle, color = black];
      A -> D [ label = "d" ];
      A -> C [ label = "c" ];
      A -> B [ label = "a" ];
      D -> D [ label = "d" ];
      B -> F [ label = "d" ];
      B -> E [ label = "b" ];
      E -> G [ label = "a" ];
      G -> E [ label = "d" ];
      G -> F [ label = "d" ];
      F -> G [ label = "a" ];
      F -> D [ label = "d" ];
      E -> D [ label = "d" ];
      D -> G [ label = "a" ];
    }'''
    ]

    model = "mainApp.Tasks"
    statements = [ 'aabba', 'bbbba', 'abbcc', 'bbdabbaa', 'dabddc' ]
    answers = [ 'true', 'false', 'false', 'true', 'false' ]

    fixture = []
    for i in range(n):
        item = {}
        item["model"] = model
        item["pk"] = None

        data = {}
        data['taskType'] = taskType
        data['has_additional_description'] = True
        data['description'] = graphs[i]
        data['additional_description'] = statements[i]
        data['answer'] = answers[i]

        item["fields"] = data
        fixture.append(item)

    writeToJSON(taskType, fixture)
    # read(taskType)



def ExpressionBelongs():
    taskType = 'ExpressionBelongs'
    n = 5
    regex_args = [
        'b((c+b)*+(ba)*a*)', 
        '(a+c)((ac)*bb*abbb*+(caca)*(b+c))',
        '((b+c(ca+(B+B)))(a+((ac)*+(c+b)))+c)(b(b(BB+b)(c+(a+b)))*)',
        '((((c|b*)|(c(a|b*))*)|(b((a|a)*|c))(a((a*|a)(aa|b*))))(c*|c)*a)c',
        '((qw+e)+eb)+((wq+(2+e))+(((eb)(qq))*+((b+ww)*+(2+((e+2)*)*)e*)))'
        ]
    model = "mainApp.Tasks"
    statements = [ 'aca', 'ccacacacab', 'ccaacacbbBBabBBa', 'baaaaaaabbbccac', 'ebqqebqq' ]
    answers = [ 'false', 'true', 'true', 'true', 'false' ]

    fixture = []
    for i in range(n):
        item = {}
        item["model"] = model
        item["pk"] = None

        data = {}
        data['taskType'] = taskType
        data['has_additional_description'] = True
        data['description'] = regex_args[i]
        data['additional_description'] = statements[i]
        data['answer'] = answers[i]

        item["fields"] = data
        fixture.append(item)

    writeToJSON(taskType, fixture)


def Accordance():
    taskType = 'Accordance'
    n = 5
    graphs = [
        '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = doublecircle]; A;
        node [shape = doublecircle, color = black]; D;
        node [shape = circle, color = black];
        A -> B [ label = "d" ];
        B -> C [ label = "b" ];
        C -> D [ label = "a" ];
        D -> B [ label = "d" ];
        D -> D [ label = "a" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; B;
        node [shape = circle, color = black];
        A -> B [ label = "b" ];
        A -> C [ label = "d" ];
        C -> D [ label = "b" ];
        D -> E [ label = "a" ];
        E -> C [ label = "d" ];
        E -> E [ label = "a" ];
        E -> B [ label = "b" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; B;
        node [shape = circle, color = black];
        A -> B [ label = "b" ];
        A -> C [ label = "d" ];
        C -> D [ label = "b" ];
        D -> E [ label = "a" ];
        E -> C [ label = "d" ];
        E -> E [ label = "a" ];
        E -> B [ label = "b" ];
        B -> B [ label = "b" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = doublecircle]; A;
        node [shape = doublecircle, color = black]; C D;
        node [shape = circle, color = black];
        A -> B [ label = "d" ];
        B -> C [ label = "b" ];
        C -> B [ label = "d" ];
        D -> B [ label = "d" ];
        C -> D [ label = "a" ];
        D -> D [ label = "a" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; B C D;
        node [shape = circle, color = black];
        A -> C [ label = "b" ];
        A -> B [ label = "a" ];
        B -> C [ label = "b" ];
        B -> E [ label = "с" ];
        B -> D [ label = "a" ];
        D -> C [ label = "b" ];
        D -> E [ label = "c" ];
        D -> D [ label = "a" ];
        E -> D [ label = "a" ];
        E -> E [ label = "c" ];
        E -> C [ label = "b" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        B -> C [ label = "a" ];
        B -> E [ label = "с" ];
        B -> D [ label = "b" ];
        C -> E [ label = "c" ];
        C -> D [ label = "b" ];
        C -> C [ label = "a" ];
        E -> E [ label = "c" ];
        E -> C [ label = "a" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        B -> C [ label = "a" ];
        B -> D [ label = "b" ];
        C -> E [ label = "c" ];
        C -> D [ label = "b" ];
        C -> C [ label = "a" ];
        E -> C [ label = "a" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        A -> C [ label = "b" ];
        B -> D [ label = "b" ];
        C -> E [ label = "c" ];
        C -> B [ label = "a" ];
        C -> C [ label = "b" ];
        E -> C [ label = "b" ];
        E -> B [ label = "a" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D G H;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        A -> C [ label = "b" ];
        B -> D [ label = "b" ];
        C -> E [ label = "a" ];
        C -> F [ label = "b" ];
        F -> E [ label = "a" ];
        F -> H [ label = "b" ];
        H -> E [ label = "a" ];
        H -> H [ label = "b" ];
        E -> G [ label = "b" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D E G;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        A -> C [ label = "b" ];
        B -> D [ label = "b" ];
        C -> E [ label = "b" ];
        E -> E [ label = "b" ];
        E -> F [ label = "c" ];
        F -> G [ label = "b" ];
        G -> F [ label = "c" ];
      }''',
      '''digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; B D;
        node [shape = circle, color = black];
        A -> B [ label = "b" ];
        B -> D [ label = "a" ];
        B -> C [ label = "b" ];
        A -> A [ label = "a" ];
        D -> D [ label = "a" ];
        C -> D [ label = "b" ];
        C -> C [ label = "a" ];
      }''']

    model = "mainApp.Tasks"
    statements = [ 
        '(dba*a)*', 
        '(dba*a)*b*', 
        '(a(a|c)*)*(a|b)', 
        'bb*(b|a)b|ab', 
        '(bc*)*(ab)' 
        ]
    answers = [ '1', '4', '3', '3', '1' ]

    indexes = [
        [0, 1, 2, 3],
        [1, 3, 0, 2],
        [5, 7, 4, 6],
        [9, 10, 8, 7],
        [7, 6, 5, 4]
    ]

    fixture = []
    for i in range(n):
        item = {}
        item["model"] = model
        item["pk"] = None

        data = {}
        data['taskType'] = taskType
        data['has_additional_description'] = True
        data['description'] = graphs[indexes[i][0]] + '$' + graphs[indexes[i][1]] + '$' + graphs[indexes[i][2]] + '$' + graphs[indexes[i][3]];
        data['additional_description'] = statements[i]
        data['answer'] = answers[i]

        item["fields"] = data
        fixture.append(item)

    writeToJSON(taskType, fixture)

def SimplifyRegex():
    taskType = 'SimplifyRegex'
    n = 5
    options = [
        ['(a + b)(a + b) + bb + a', '(a + b)', 'aa + bb', '(a + b)(a + b)'],
        ['(b + a)*', '(a + b)(a + b)*', 'a*b*', 'ε + (a + b)*(b + a)'],
        ['(abbaa(b + ba))* + abbaab', '(abbaaba)*', '(abbaa(b + ba))*', '(abbaab)* + (abbaaba)*'],
        ['(ab + a)', '(ab + a)a*', '(ab + a)*', '(ab)*'],
        ['a(a + c)', 'a(a + c)* + b + c', 'c + (a( (a) + c*) + ( (ac + b) + c) )*', '(a (a + c)* + ( (ac + b) + c) )'],
    ]

    model = "mainApp.Tasks"
    statements = [ 
        '(a + b)(a + b) + aa + bb', 
        '(a*b)* + (b*a)*', 
        '(abbaab + abbaaba)*', 
        '((ab + ab)*a*)*', 
        'c + (a ( ( (a + a) ) + c*)* + ( (ac + b) + c) )' 
        ]
    answers = [ '4', '1', '3', '3', '2' ]

    fixture = []
    for i in range(n):
        item = {}
        item["model"] = model
        item["pk"] = None

        data = {}
        data['taskType'] = taskType
        data['has_additional_description'] = True
        data['description'] = options[i][0] + '$' + options[i][1] + '$' + options[i][2] + '$' + options[i][3];
        data['additional_description'] = statements[i]
        data['answer'] = answers[i]

        item["fields"] = data
        fixture.append(item)

    writeToJSON(taskType, fixture)

def LangDescription():
    taskType = 'LangDescription'
    n = 5

    model = "mainApp.Tasks"
    statements = [ 
        'Включает только три цепочки: a, b и cbbab, т.е. язык = { "a", "b", "cbba" }.', 
        'Все цепочки из а и b (включая ε), в которых b входят только парами.', 
        'Язык включает все цепочки из 0 и 1 (в том числе ε), которые оканчиваются цепочкой 10010.', 
        'Все цепочки из а и b (включая ε), которые содержат точно два вхождения b.', 
        'Все цепочки из а и b (включая ε), которые содержат по крайней мере одну пару рядом стоящих а или b.' 
        ]
    answers = [ 'a+b+cbbab', '(a+bb)*', '(0+1)*10010', 'a*ba*ba*', '(a+b)*(aa+bb)(a+b)*' ]

    fixture = []
    for i in range(n):
        item = {}
        item["model"] = model
        item["pk"] = None

        data = {}
        data['taskType'] = taskType
        data['has_additional_description'] = False
        data['description'] = statements[i]
        data['answer'] = answers[i]

        item["fields"] = data
        fixture.append(item)

    writeToJSON(taskType, fixture)


def TaskDFAtoregex():
    taskType = 'TaskDFAtoregex'
    n = 5

    graphs = [
        '''digraph G { rankdir=LR;
          layout="circo";
          node [shape = doublecircle, color = red]; A;
          node [shape = circle, color = black];
          A -> B [ label = "a " ];
          B -> A [ label = " b " ];
          A -> C [ label = "b" ];
          C -> A [ label = "a" ];
          C -> B [ label = "b" ];}''',
        '''digraph G { 
        layout="dot";
        node [shape = circle, color = red]; A;
        node [shape = doublecircle, color = black] B, C;
        A -> B [ label = "a" ];
        A -> C [ label = "b" ];
        C -> C [ label = " a" ];
        B -> B [ label = " a" ];}''',
        '''digraph G { rankdir=LR;
        layout="dot";
        node [shape = circle, color = red]; A;
        node [shape = doublecircle, color = black] B;
        A -> B [ label = "a" ];
        B -> A [ label = "b" ];
        A -> A [ label = "c" ];
        B -> B [ label = "d" ];}''',
        '''digraph G { rankdir=LR;
        layout="dot";
        node [shape = circle, color = red]; A;
        node [shape = doublecircle, color = black] B;
        A -> B [ label = "0" ];
        B -> A [ label = "1" ];}''',
        '''digraph G { 
         rankdir=LR;
        layout="circo";
        node [shape = circle, color = red]; A;
        node [color = black]; B;
        node [shape = doublecircle]; C;
        A -> B [ label = "b" ];
        C -> B [ label = "a" ];
        A -> C [ label = "a" ];
        C -> C [ label = " a" ];
        B -> B [ label = " a,b" ];}'''
    ]

    model = "mainApp.Tasks"
    statements = [ 
        'Включает только три цепочки: a, b и cbbab, т.е. язык = { "a", "b", "cbba" }.', 
        'Все цепочки из а и b (включая ε), в которых b входят только парами.', 
        'Язык включает все цепочки из 0 и 1 (в том числе ε), которые оканчиваются цепочкой 10010.', 
        'Все цепочки из а и b (включая ε), которые содержат точно два вхождения b.', 
        'Все цепочки из а и b (включая ε), которые содержат по крайней мере одну пару рядом стоящих а или b.' 
        ]
    answers = [ 'aa*', 'aa*+ba*', 'c*a(d+bc*a)*', '0(10)*', 'aa*' ]

    fixture = []
    for i in range(n):
        item = {}
        item["model"] = model
        item["pk"] = None

        data = {}
        data['taskType'] = taskType
        data['has_additional_description'] = False
        data['description'] = graphs[i]
        data['answer'] = answers[i]

        item["fields"] = data
        fixture.append(item)

    writeToJSON(taskType, fixture)


def QuestionCategory():
    fixture = []
    taskType = 'QuestionCategory'

    names = [
        'Допущение цепочки автоматом',
        'Регулярное выражение по описанию языка',
        'Принадлежность слова регулярному выражению',
        'Упростить регулярное выражение',
        'Соотвествие автомата рег. выражению',
        'ДКА в регулярное выражение'
    ]
    code_names = [
        'ChainAcceptance',
        'LangDescription',
        'ExpressionBelongs',
        'SimplifyRegex',
        'Accordance',
        'TaskDFAtoregex'
    ]

    n = len(names) 

    for i in range(n):
        item = {}
        item["model"] = "mainApp.QuestionCategory"
        item["pk"] = None

        data = {}
        data['name'] = names[i]
        data['code_name'] = code_names[i]

        item["fields"] = data
        fixture.append(item)

    writeToJSON(taskType, fixture)


if __name__ == '__main__':
    ChainAcceptance()
    ExpressionBelongs()
    Accordance()
    SimplifyRegex()
    LangDescription()
    TaskDFAtoregex()
    QuestionCategory()
