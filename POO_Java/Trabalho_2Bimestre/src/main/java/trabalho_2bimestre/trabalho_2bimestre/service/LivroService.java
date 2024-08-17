package trabalho_2bimestre.trabalho_2bimestre.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trabalho_2bimestre.trabalho_2bimestre.model.dto.LivroDTO;
import trabalho_2bimestre.trabalho_2bimestre.model.entities.Livro;
import trabalho_2bimestre.trabalho_2bimestre.model.repository.LivroRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public List<LivroDTO> getAll() {
        return livroRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public LivroDTO getById(Long id) {
        return livroRepository.findById(id).map(this::convertToDto).orElse(null);
    }

    public LivroDTO create(LivroDTO livroDTO) {
        Livro livro = convertToEntity(livroDTO);
        livro = livroRepository.save(livro);
        return convertToDto(livro);
    }

    public LivroDTO update(Long id, LivroDTO livroDTO) {
        Livro livro = convertToEntity(livroDTO);
        livro.setId(id);
        livro = livroRepository.save(livro);
        return convertToDto(livro);
    }

    public void delete(Long id) {
        livroRepository.deleteById(id);
    }

    private LivroDTO convertToDto(Livro livro) {
        LivroDTO livroDTO = new LivroDTO();
        livroDTO.setId(livro.getId());
        livroDTO.setTitulo(livro.getTitulo());
        livroDTO.setIsbn(livro.getIsbn());
        livroDTO.setAnoPublicacao(livro.getAnoPublicacao());
        return livroDTO;
    }

    private Livro convertToEntity(LivroDTO livroDTO) {
        Livro livro = new Livro();
        livro.setTitulo(livroDTO.getTitulo());
        livro.setIsbn(livroDTO.getIsbn());
        livro.setAnoPublicacao(livroDTO.getAnoPublicacao());
        return livro;
    }
}
