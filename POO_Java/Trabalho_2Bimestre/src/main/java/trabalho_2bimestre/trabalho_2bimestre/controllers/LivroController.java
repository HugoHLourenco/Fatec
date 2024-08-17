package trabalho_2bimestre.trabalho_2bimestre.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import trabalho_2bimestre.trabalho_2bimestre.model.dto.LivroDTO;
import trabalho_2bimestre.trabalho_2bimestre.service.LivroService;

import java.util.List;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @GetMapping
    public List<LivroDTO> getAll() {
        return livroService.getAll();
    }

    @GetMapping("/{id}")
    public LivroDTO getById(@PathVariable Long id) {
        return livroService.getById(id);
    }

    @PostMapping
    public LivroDTO create(@RequestBody LivroDTO livroDTO) {
        return livroService.create(livroDTO);
    }

    @PutMapping("/{id}")
    public LivroDTO update(@PathVariable Long id, @RequestBody LivroDTO livroDTO) {
        return livroService.update(id, livroDTO);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        livroService.delete(id);
    }
}
